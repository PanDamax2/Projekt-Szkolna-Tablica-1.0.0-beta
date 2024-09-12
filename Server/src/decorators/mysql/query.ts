import { Request, Response, NextFunction } from 'express';
import { Model, ModelStatic } from 'sequelize';

export function MysqlQuery(model: ModelStatic<Model>) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        descriptor.value = async function (req: Request, res: Response, next: NextFunction) {
            try {
                const documents = await model.findAll({ where: { ...req.body } });
                req.mysqlQuery = documents;
            } catch (error) {
                logging.error(error);

                return res.status(400).json(error);
            }

            return originalMethod.call(this, req, res, next);
        };

        return descriptor;
    };
}