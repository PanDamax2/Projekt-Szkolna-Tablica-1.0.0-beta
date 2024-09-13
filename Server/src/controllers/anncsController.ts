import { Route } from "../decorators/route";
import { Validate } from "../decorators/validate";
import { Controller } from "../decorators/controller";
import { verifyToken } from "../middleware/verifyToken";
import { MysqlCreate } from "../decorators/mysql/create";
import { MysqlGetAll } from "../decorators/mysql/getAll";
import { MysqlDelete } from "../decorators/mysql/delete";
import { MysqlUpdate } from "../decorators/mysql/update";
import { Request, Response, NextFunction } from 'express';
import Announcement from "../models/announcements.model";
import { anncsRemoveTimestamps } from "../helpers/anncsHelper";
import { createAnnouncementSchema } from "../validators/anncsValidator/anncsCreateValidator";
import { updateAnnouncementSchema } from "../validators/anncsValidator/anncsUpdateValidator";

@Controller('/api')
class AnncsController {
    @Route('get', '/announcements')
    @MysqlGetAll(Announcement)
    getAll(req: Request, res: Response, next: NextFunction) {
        const announcement = (req.mysqlGetAll as Announcement[]).map(anncsRemoveTimestamps);
        return res.status(200).json({ success: true, message: announcement });
    }

    @Route('post', '/announcements', verifyToken)
    @Validate(createAnnouncementSchema)
    @MysqlCreate(Announcement)
    create(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ success: true, message: 'Dodano ogłoszenie' });
    }

    @Route('put', '/announcements/:id', verifyToken)
    @Validate(updateAnnouncementSchema)
    @MysqlUpdate(Announcement)
    update(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ success: true, message: 'Zaktualizowano ogłoszenie' });
    }

    @Route('delete', '/announcements/:id', verifyToken)
    @MysqlDelete(Announcement)
    delete(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ success: true, message: 'Usunieto ogłoszenie' });
    }
}

export default AnncsController;
