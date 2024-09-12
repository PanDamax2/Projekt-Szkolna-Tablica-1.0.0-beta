import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { JWT_SECRET } from '../config/config';

declare module 'express-serve-static-core' {
    interface Request {
        user?: { id: number; username?: string };
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies.token;

    if (!token) {
        logging.error('Nieautoryzowany - brak tokenu');
        return res.status(401).json({ success: false, message: 'Nieautoryzowany - brak tokenu' });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET!) as JwtPayload & { userID: number };
        req.user = { id: decoded.userID };
        next();
    } catch (error) {
        logging.error('Error in verifyToken:', error);
        return res.status(401).json({ success: false, message: 'Nieautoryzowany - nieprawidłowy token' });
    }
};
