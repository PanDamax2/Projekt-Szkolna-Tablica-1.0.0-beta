import { Request, Response, NextFunction } from 'express';
import { Model, ModelStatic } from 'sequelize';

export function MysqlUpdate(model: ModelStatic<Model>) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                const document = await model.findByPk(req.params.id);

                if (!document) {
                    return res.status(404).json({ message: 'Not found' });
                }

                await document.update(req.body);

                req.mysqlUpdate = document;
            } catch (error) {
                logging.error(error);

                return res.status(400).json(error);
            }

            return originalMethod.call(this, req, res, next);
        };

        return descriptor;
    };
}