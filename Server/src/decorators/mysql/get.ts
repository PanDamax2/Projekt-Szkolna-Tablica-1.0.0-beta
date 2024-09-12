
import { Request, Response, NextFunction } from 'express';
import { Model, ModelStatic } from 'sequelize';

export function MysqlGet(model: ModelStatic<Model>) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                const document = await model.findByPk(req.params.id);

                if (document) {
                    (req as any).mysqlGet = document;
                    return originalMethod.call(this, req, res, next);
                } else {
                    return res.status(404).json({ error: 'Nie znaleziono' });
                }
            } catch (error) {
                logging.error(error);
                return res.status(500).json({ error: 'Internal server error' });
            }
        };

        return descriptor;
    };
}
