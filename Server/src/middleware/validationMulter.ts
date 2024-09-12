import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import Joi from 'joi';

export const validateSchema = (schema: Joi.ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate({ ...req.body, file: req.file }, { abortEarly: false });

        if (error) {
            if (req.file) {
                fs.unlinkSync(req.file.path);
            }
            return res.status(400).json({ success: false, message: error.details[0].message });
        }

        next();
    };
};
