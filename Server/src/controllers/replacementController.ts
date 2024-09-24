import { Route } from '../decorators/route';
import { Validate } from '../decorators/validate';
import { Controller } from '../decorators/controller';
import Replacement from '../models/replacements.model';
import { verifyToken } from '../middleware/verifyToken';
import { MysqlCreate } from '../decorators/mysql/create';
import { MysqlGetAll } from '../decorators/mysql/getAll';
import { MysqlDelete } from '../decorators/mysql/delete';
import { MysqlUpdate } from '../decorators/mysql/update';
import { Request, Response, NextFunction } from 'express';
import { replacementRemoveTimestamps } from '../helpers/replacementHelper';
import { createReplacementSchema } from '../validators/replacementValidator/replacementCreateValidator';
import { updateReplacementSchema } from '../validators/replacementValidator/replacementsUpdateValidator';

@Controller('/api')
class ReplacementController {
    @Route('get', '/replacements')
    @MysqlGetAll(Replacement)
    getAll(req: Request, res: Response, next: NextFunction) {
        const replacement = (req.mysqlGetAll as Replacement[]).map(replacementRemoveTimestamps);
        return res.status(200).json({ success: true, message: replacement });
    }

    @Route('post', '/replacements', verifyToken)
    @Validate(createReplacementSchema)
    @MysqlCreate(Replacement)
    create(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ success: true, message: 'Dodano rekord do tablicy zastępstw' });
    }

    @Route('put', '/replacements/:id', verifyToken)
    @Validate(updateReplacementSchema)
    @MysqlUpdate(Replacement)
    update(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ success: true, message: 'Zaktualizowano rekord w tablicy zastępstw' });
    }

    @Route('delete', '/replacements/:id', verifyToken)
    @MysqlDelete(Replacement)
    delete(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ success: true, message: 'Usunieto rekord z tablicy zastępstw' });
    }
}

export default ReplacementController;
