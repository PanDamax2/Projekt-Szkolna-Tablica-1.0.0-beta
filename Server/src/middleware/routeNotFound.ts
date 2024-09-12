import { Request, Response, NextFunction } from 'express';

export function routeNotFound(req: Request, res: Response, next: NextFunction) {
    const error = new Error('Not found');
    logging.warn(`[routeNotFound] ${error.message}`);

    return res.status(404).json({
        error: {
            message: error.message
        }
    });
}