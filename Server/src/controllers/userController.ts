import User from '../models/user.model';
import bcryptjs from 'bcryptjs';
import { Request, Response, NextFunction } from 'express';

import { Route } from '../decorators/route';
import { Validate } from '../decorators/validate';
import { MysqlGet } from '../decorators/mysql/get';
import { Controller } from '../decorators/controller';
import { verifyToken } from '../middleware/verifyToken';
import { MysqlGetAll } from '../decorators/mysql/getAll';
import { MysqlDelete } from '../decorators/mysql/delete';
import { removeSensitiveInfo } from '../helpers/userHelper';
import { checkUserExistence } from '../utils/checkUserExistence';
import { sendVerificationEmail } from '../services/emailService';
import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie';
import { userCreateValidator } from '../validators/userValidator/userCreateValidator';
import { userUpdateValidator } from '../validators/userValidator/UserUpdateValidator';

@Controller('/api')
class UserController {
    @Route('get', '/users', verifyToken)
    @MysqlGetAll(User)
    getAll(req: Request, res: Response, next: NextFunction) {
        const users = (req.mysqlGetAll as User[]).map(removeSensitiveInfo);
        return res.status(200).json({ success: true, message: users });
    }

    @Route('get', '/users/:id', verifyToken)
    @MysqlGet(User)
    get(req: Request, res: Response, next: NextFunction) {
        const user = req.mysqlGet as User;
        const userWithoutSensitiveInfo = removeSensitiveInfo(user);
        return res.status(200).json({ success: true, message: userWithoutSensitiveInfo });
    }

    @Route('post', '/users', verifyToken)
    @Validate(userCreateValidator)
    async create(req: Request, res: Response, next: NextFunction) {
        try {
            const { exists, message } = await checkUserExistence(req.body?.email, req.body?.login);
            if (exists) return res.status(409).json({ success: false, message: message });

            const salt = await bcryptjs.genSalt(10);
            const hashedPassword = await bcryptjs.hash(req.body.password, salt);
            req.body.password = hashedPassword;

            const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();
            req.body.verificationToken = verificationToken;
            req.body.verificationTokenExpireAt = Date.now() + 1 * 60 * 60 * 1000;

            const user = await User.create(req.body);

            logging.info('User created successfully!');

            generateTokenAndSetCookie(res, user.id);

            // const email : string = user.email;
            // await sendVerificationEmail( email, verificationToken);

            const userWithoutSensitiveInfo = removeSensitiveInfo(user);
            return res.status(201).json({ success: true, message: userWithoutSensitiveInfo });
        } catch (error) {
            logging.error('Error creating user:', error);
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
    }

    @Route('put', '/users/:id', verifyToken)
    @Validate(userUpdateValidator)
    async update(req: Request, res: Response, next: NextFunction) {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ success: false, message: 'Nie znaleziono uzytkownika.' });
            }

            const { exists, message } = await checkUserExistence(req.body?.email, req.body?.login);
            if (exists) return res.status(409).json({ success: false, message: message });

            await user.update(req.body);

            const userWithoutSensitiveInfo = removeSensitiveInfo(user);

            return res.status(200).json(userWithoutSensitiveInfo);
        } catch (error) {
            logging.error('Error creating user:', error);
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
    }

    @Route('delete', '/users/:id', verifyToken)
    @MysqlDelete(User)
    remove(req: Request, res: Response, next: NextFunction) {
        return res.status(201).json({ message: 'Usunięto!' });
    }
}

export default UserController;
