import { upload } from "../config/multer";
import { Route } from "../decorators/route";
import { Validate } from "../decorators/validate";
import Classroom from "../models/classroom.model";
import { Controller } from "../decorators/controller";
import { verifyToken } from "../middleware/verifyToken";
import { MysqlCreate } from "../decorators/mysql/create";
import { MysqlGetAll } from "../decorators/mysql/getAll";
import { MysqlDelete } from "../decorators/mysql/delete";
import { MysqlUpdate } from "../decorators/mysql/update";
import { Request, Response, NextFunction } from 'express';
import { classroomRemoveTimestamps } from "../helpers/classHelper";
import { createClassroomsSchema } from "../validators/classValidator/classCreateValidator";
import { updateClassroomsSchema } from "../validators/classValidator/classUpgradeValidator";

@Controller('/api')
class ClassroomController {
    @Route('get', '/classrooms')
    @MysqlGetAll(Classroom)
    getAll(req: Request, res: Response, next: NextFunction) {
        const classroom = (req.mysqlGetAll as Classroom[]).map(classroomRemoveTimestamps);
        return res.status(200).json({ success: true, message: classroom });
    }

    @Route('post', '/classrooms', verifyToken, upload.none())
    @Validate(createClassroomsSchema)
    @MysqlCreate(Classroom)
    create(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ success: true, message: 'Dodano klase do tablicy' });
    }

    @Route('put', '/classrooms/:id', verifyToken, upload.none())
    @Validate(updateClassroomsSchema)
    @MysqlUpdate(Classroom)
    update(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ success: true, message: 'Zaktualizowano klase w tablicy' });
    }


    @Route('delete', '/classrooms/:id', verifyToken)
    @MysqlDelete(Classroom)
    delete(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ success: true, message: 'Usunieto klase z tablicy' });
    }
}

export default ClassroomController;
