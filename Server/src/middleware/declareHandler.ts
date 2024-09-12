import { Request, Response, NextFunction } from 'express';
import { Model } from 'sequelize';

declare global {
    namespace Express {
        interface Request {
            mysqlGet: Model | null;
            mysqlGetAll: Model[];
            mysqlCreate: Model | null;
            mysqlUpdate: Model | null;
            mysqlQuery: Model[];
        }
    }
}

export function declareHandler(req: Request, res: Response, next: NextFunction) {
    req.mysqlGet = null;
    req.mysqlGetAll = [];
    req.mysqlCreate = null;
    req.mysqlUpdate = null;
    req.mysqlQuery = [];

    next();
}

export default declareHandler;