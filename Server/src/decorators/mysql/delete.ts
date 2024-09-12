import { Request, Response, NextFunction } from 'express';
import { Model, ModelStatic } from 'sequelize';

export function MysqlDelete(model: ModelStatic<Model>) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                const document = await model.findOne({ where: { id: req.params.id } });

                if (!document) {
                    return res.sendStatus(404);
                }

                await document.destroy();
            } catch (error) {
                logging.error(error);

                return res.status(400).json(error);
            }

            return originalMethod.call(this, req, res, next);
        };

        return descriptor;
    };
}