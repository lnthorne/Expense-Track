import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { IUser } from '../util/interfaces/users.interface';

export class UserController {
    public async CreateUser(req: Request, res: Response): Promise<void> {
        const userData: IUser = req.body;

        try {
            const newUser: IUser = new User(userData);
            await newUser.save();

            res.status(201).json({
                message: 'User created successfully',
                user: newUser,
            });
        } catch (error) {
            res.status(500).json({ message: 'Error creating user', error });
        }
    }

    public async GetUserById(req: Request, res: Response): Promise<void> {
        console.log((req as any).user);
        try {
            const userId = (req as any).user.id;
            const user: IUser | null = await User.findById(userId);

            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }

            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching user', error });
        }
    }

    public async UpdateUser(req: Request, res: Response): Promise<void> {
        try {
            const userId = (req as any).user.id;
            const user: IUser | null = await User.findByIdAndUpdate(
                userId,
                req.body,
                {
                    new: true,
                    runValidators: true,
                },
            );

            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.send(user);
        } catch (error) {
            res.status(500).json({ message: 'Error updating user', error });
        }
    }

    public async DeleteUser(req: Request, res: Response): Promise<void> {
        try {
            const user: IUser | null = await User.findByIdAndDelete(
                req.params.id,
            );

            if (!user) {
                res.status(404).json({ message: 'User not found' });
                return;
            }
            res.send(user);
        } catch (error) {
            res.status(500).json({ message: 'Error deleting user', error });
        }
    }
}
