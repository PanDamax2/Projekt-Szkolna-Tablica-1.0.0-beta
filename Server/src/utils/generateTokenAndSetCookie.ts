import jwt from 'jsonwebtoken';
import { Response } from 'express';
import { JWT_SECRET } from '../config/config';

export const generateTokenAndSetCookie = (res: Response, userID: Number): string => {
    try {
        const token = jwt.sign({ userID }, JWT_SECRET, {
            expiresIn: '7d',                                                                                    //  7 dni
        });

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000,                                                                    // 7 dni
        });

        logging.info('JWT token generated and cookie set successfully.');

        return token;
    } catch (error) {
        logging.error('Error generating JWT token or setting cookie:', error);
        throw error;
    }
};
