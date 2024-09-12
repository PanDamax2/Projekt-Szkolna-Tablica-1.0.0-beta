import { Route } from '../decorators/route';
import { Controller } from '../decorators/controller';
import { Request, Response, NextFunction } from 'express';
import View from '../models/view.model';
import { MysqlGet } from '../decorators/mysql/get';
import { upload } from '../config/multer';
import { Validate } from '../decorators/validate';
import { updateViewSchema } from '../validators/viewValidator/updateViewValidator';
import { verifyToken } from '../middleware/verifyToken';
import { fileHelpersView } from '../helpers/viewHelper';
import { validateSchema } from '../middleware/validationMulter';

@Controller('/api')
class ViewController {
    @Route('get', '/views/:id')
    @MysqlGet(View)
    get(req: Request, res: Response, next: NextFunction) {
        const views = req.mysqlGet as View;
        return res.status(200).json({ success: true, message: views });
    }

    @Route('put', '/views/:id', verifyToken, upload.single('file'), validateSchema(updateViewSchema))
    @Validate(updateViewSchema)
    async update(req: Request, res: Response, next: NextFunction) {
        const viewId = req.params.id;

        try {
            const view = await View.findByPk(viewId);
            if (!view) {
                return res.status(404).json({ success: false, message: 'Nie znaleziono widoku' });
            }

            let updated = false;

            if (req.body.viewMode) {
                view.viewMode = req.body.viewMode;
                updated = true;
            }

            if (req.file) {
                try {
                    const newFilePath = await fileHelpersView.saveNewFile(req.file, viewId);
                    if (view.schoolLogo) {
                        await fileHelpersView.removeOldFile(view.schoolLogo);
                    }
                    view.schoolLogo = newFilePath;
                    updated = true;
                } catch (fileError) {
                    logging.error('Error processing file:', fileError);
                    return res.status(500).json({ success: false, message: 'Błąd przetwarzania pliku' });
                }
            }

            if (updated) {
                await view.save();
                return res.status(200).json({
                    success: true,
                    message: 'Dane widoku zostały zaktualizowane pomyślnie'
                });
            }

            return res.status(400).json({
                success: false,
                message: 'Nie podano żadnych danych do aktualizacji'
            });
        } catch (error) {
            logging.error('Error updating view controller:', error);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    }
}

export default ViewController;
