import { Request, Response } from 'express';
import { User } from '../models/user.model';
import { IUser } from '../util/interfaces/users.interface';

export class UserController {
    public async CreateUser(req: Request, res: Response): Promise<void> {
        const userData = req.body;

        try {
            const newUser = new User(userData);
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
        try {
            const userId = req.params.id; // Assuming you're getting the ID from the URL parameters
            const user = await User.findById(userId);

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
            const user = await User.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
            });

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
            const user = await User.findByIdAndDelete(req.params.id);

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
