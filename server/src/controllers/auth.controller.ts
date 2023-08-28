import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';
import { IUser } from '../util/interfaces/users.interface';
import dotenv from 'dotenv';

dotenv.config();

export class AuthController {
    private static generateJWT(user: IUser): string {
        const payload = {
            id: user.userId,
            username: user.username,
        };
        const secret = process.env.JWT_SECRET;
        const options = { expiresIn: '1d' };
        return jwt.sign(payload, secret!, options);
    }

    public async register(req: Request, res: Response): Promise<void> {
        try {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            const newUser: IUser = new User({
                ...req.body,
                password: hashedPassword,
            });
            await newUser.save();

            const token = AuthController.generateJWT(newUser);

            res.status(201).json({
                message: 'User registered successfully',
                token,
                user: newUser,
            });
        } catch (error) {
            res.status(500).json({ message: 'Error registering user', error });
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const user: IUser | null = await User.findOne({
                username: req.body.username,
            });

            if (!user) {
                res.status(401).json({
                    message: 'Invalid username or password',
                });
                return;
            }

            const isMatch = await bcrypt.compare(
                req.body.password,
                user.password,
            );

            if (!isMatch) {
                res.status(401).json({
                    message: 'Invalid username or password',
                });
                return;
            }

            const token = AuthController.generateJWT(user);
            res.status(200).json({
                message: 'Logged in successfully',
                token,
                user,
            });
        } catch (error) {
            res.status(500).json({ message: 'Error during login', error });
        }
    }

    public async logout(req: Request, res: Response): Promise<void> {
        // In stateless JWT, there's typically no server-side logout action. Tokens are usually cleared client-side.
        // If you're maintaining a token blacklist, you'd add the token to it here.
        res.status(200).json({ message: 'Logged out successfully' });
    }
}