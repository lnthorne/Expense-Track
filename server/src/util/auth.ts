import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    // Get the token from the request headers
    const token = req.header('Authorization')?.split('Bearer ')[1];

    if (!token) {
        return res
            .status(401)
            .json({ message: 'No token, authorization denied.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!); // ensure you have JWT_SECRET in your environment variables
        (req as any).user = decoded; // Add the decoded payload to the request object

        next(); // Continue to the next middleware or route handler
    } catch (err) {
        res.status(401).json({ message: 'Invalid token.' });
    }
};

export default verifyToken;
