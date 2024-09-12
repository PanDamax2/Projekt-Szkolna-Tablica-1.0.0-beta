import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export function Validate(schema: Joi.ObjectSchema) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                await schema.validateAsync(req.body, { abortEarly: false });
            } catch (error) {
                if (error instanceof Joi.ValidationError) {
                    const simplifiedError = {
                        success: false,
                        message: error.details.map(detail => detail.message).join(', ')
                    };
                    logging.error('Validation error:', simplifiedError);
                    return res.status(422).json(simplifiedError);
                }
                logging.error('Unexpected error during validation:', error);
                return res.status(500).json({ success: false, message: 'Internal server error' });
            }

            return originalMethod.call(this, req, res, next);
        };

        return descriptor;
    };
}