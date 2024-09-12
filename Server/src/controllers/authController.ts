import crypto from 'crypto';
import { Op } from 'sequelize';
import bcryptjs from 'bcryptjs';
import User from '../models/user.model';
import { Request, Response, NextFunction } from 'express';

import { Route } from '../decorators/route';
import { Validate } from '../decorators/validate';
import { ADMIN_PANEL_URL } from '../config/config';
import { Controller } from '../decorators/controller';
import { verifyToken } from '../middleware/verifyToken';
import { removeSensitiveInfo } from '../helpers/userHelper';
import { loginValidator } from '../validators/authValidator/loginValidaotor';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie';
import { forgotPasswordValidator } from '../validators/authValidator/forgotPassword';
import { verifyEmailValidator } from '../validators/authValidator/verifyEmailValidator';
import { resetPasswordValidator } from '../validators/authValidator/resetPasswordValidator';
import { sendPasswordResetEmail, sendResetSuccessEmail, sendWelcomeEmail } from '../services/emailService';

@Controller('/auth')
class AuthController {
    @Route('post', '/veryfi-email', verifyToken)
    @Validate(verifyEmailValidator)
    async verifyEmail(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await User.findOne({
                where: {
                    verificationToken: req.body?.code,
                    verificationTokenExpireAt: {
                        [Op.gt]: new Date()
                    }
                }
            });

            if (!user) {
                return res.status(400).json({ succes: false, message: 'Niepoprawny lub wygasły token' });
            }

            user.isVerified = true;
            user.verificationToken = null;
            user.verificationTokenExpireAt = null;
            await user.save();

            // await sendWelcomeEmail(user.email, user.name);

            // const userWithoutSensitiveInfo = removeSensitiveInfo(user);
            // return res.status(200).json({ success: true, message: userWithoutSensitiveInfo });
            return res.status(200).json({ success: true, message: "Pomyślnie zweryfikowano email" });
        } catch (error) {
            logging.error('error in veryfiEmail ', error);
            res.status(400).json({ succes: false, message: (error as Error).message });
        }
    }

    @Route('post', '/login')
    @Validate(loginValidator)
    async login(req: Request, res: Response, next: NextFunction) {
        const { login, password } = req.body;
        try {
            const user = await User.findOne({
                where: {
                    [Op.or]: [
                        { email: login },
                        { login: login }
                    ]
                }
            })
            if (!user) {
                return res.status(400).json({ succes: false, message: 'Nie prawidłowy login.' });
            }

            const isPasswordValid = await bcryptjs.compare(password, user.password);
            if (!isPasswordValid) {
                return res.status(400).json({ succes: false, message: 'Nie prawidłowe hasło.' });
            }

            generateTokenAndSetCookie(res, user.id)

            user.lastLogin = new Date();
            await user.save();
            logging.info(`User ${user.email} logged in.`);

            const userWithoutSensitiveInfo = removeSensitiveInfo(user);
            return res.status(200).json({ success: true, message: userWithoutSensitiveInfo });
        } catch (error) {
            logging.error('error in login ', error);
            res.status(400).json({ succes: false, message: (error as Error).message });
        }
    }

    @Route('post', '/logout')
    logout(req: Request, res: Response, next: NextFunction) {
        res.clearCookie('token');
        res.status(200).json({ succes: true, message: 'Pomyślne wylogowano.' });
    }

    @Route('get', '/check-auth', verifyToken)
    async checkAuth(req: Request, res: Response) {
        try {
            const user = await User.findByPk(req.user!.id);
            if (!user) {
                return res.status(400).json({ success: false, message: 'Nie znaleziono użytkownika' });
            }

            const userWithoutSensitiveInfo = removeSensitiveInfo(user);
            return res.status(200).json({ success: true, user: userWithoutSensitiveInfo });
        } catch (error) {
            logging.error('Error in checkAuth:', error);
            return res.status(400).json({ success: false, message: (error as Error).message });
        }
    }

    @Route('post', '/forgot-password', verifyToken)
    @Validate(forgotPasswordValidator)
    async forgotPassword(req: Request, res: Response) {
        const { email } = req.body;
        try {
            const user = await User.findOne({ where: { email } });
    
            if (!user) {
                return res.status(400).json({ succes: false, message: 'Nie znaleziono użytkownika' });
            }
    
            const resetToken = crypto.randomBytes(20).toString('hex');
            const resetTokenExpireAt = new Date(Date.now() + 1 * 60 * 60 * 1000);                           // 1 hour
    
            user.resetPasswordToken = resetToken;
            user.resetPasswordExpireAt = resetTokenExpireAt;
    
            await user.save();
    
            // await sendPasswordResetEmail(user.email, `${ADMIN_PANEL_URL}/reset-password/${resetToken}`);
    
            res.status(200).json({
                succes: true,
                message: 'Link do resetowania hasła wysłany na adres e-mail',
            });
        } catch (error) {
            logging.error('Error in forgotPassword ', error);
            res.status(400).json({ succes: false, message: (error as Error).message });
        }
    }

    @Route('post', '/reset-password/:token', verifyToken)
    @Validate(resetPasswordValidator)
    async resetPassword(req: Request, res: Response) {
        try {
            const { token } = req.params;
            const { password } = req.body;
    
            const user = await User.findOne({
                where: {
                    resetPasswordToken: token,
                    resetPasswordExpireAt: {
                        [Op.gt]: new Date(),
                    },
                },
            });
    
            if (!user) {
                return res.status(400).json({ success: false, message: 'Nieprawidłowy lub wygasły token resetowania hasła' });
            }
    
            const hashedPassword = await bcryptjs.hash(password, 10);
    
            user.password = hashedPassword;
            user.resetPasswordToken = null;
            user.resetPasswordExpireAt = null;
            await user.save();
    
            // await sendResetSuccessEmail(user.email);
    
            res.status(200).json({
                success: true,
                message: 'Hasło zostało zresetowane',
            });
        } catch (error) {
            logging.error('Error in resetPassword:', error);
            res.status(400).json({ success: false, message: (error as Error).message });
        }
    }
}

export default AuthController;
