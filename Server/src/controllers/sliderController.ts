import { upload } from '../config/multer';
import { Route } from '../decorators/route';
import Slider from '../models/slider.models';
import { Validate } from '../decorators/validate';
import { Controller } from '../decorators/controller';
import { verifyToken } from '../middleware/verifyToken';
import { MysqlGetAll } from '../decorators/mysql/getAll';
import { MysqlCreate } from '../decorators/mysql/create';
import { Request, Response, NextFunction } from 'express';
import { validateSchema } from '../middleware/validationMulter';
import { fileHelpersSlider, sliderRemoveTimestamps } from '../helpers/sliderHelper';
import { createSliderSchema } from '../validators/sliderValidator/sliderCreateValidator';
import { updateSliderSchema } from '../validators/sliderValidator/sliderUpdateValidaotr';

@Controller('/api')
class SliderController {
    @Route('get', '/slider')
    @MysqlGetAll(Slider)
    getAll(req: Request, res: Response, next: NextFunction) {
        const slider = (req.mysqlGetAll as Slider[]).map(sliderRemoveTimestamps);
        return res.status(200).json({ success: true, message: slider });
    }

    @Route('post', '/slider', verifyToken)
    @Validate(createSliderSchema)
    @MysqlCreate(Slider)
    create(req: Request, res: Response, next: NextFunction) {
        return res.status(200).json({ success: true, message: 'Dodano zdjecie do slidera' });
    }

    @Route('put', '/slider/:id', verifyToken, upload.single('file'), validateSchema(updateSliderSchema))
    @Validate(updateSliderSchema)
    async update(req: Request, res: Response, next: NextFunction) {
        const sliderId = req.params.id;

        try {
            const slider = await Slider.findByPk(sliderId);
            if (!slider) {
                return res.status(404).json({ success: false, message: 'Nie znaleziono zdjecia' });
            }

            if (req.file) {
                try {
                    const newFilePath = await fileHelpersSlider.saveNewFile(req.file, sliderId);
                    if (slider.file) {
                        await fileHelpersSlider.removeOldFile(slider.file);
                    }
                    slider.file = newFilePath;

                    await slider.save();
                    return res.status(200).json({
                        success: true,
                        message: 'Dane slidera zostały zaktualizowane pomyślnie'
                    });
                } catch (fileError) {
                    logging.error('Error processing file:', fileError);
                    return res.status(500).json({ success: false, message: 'Błąd przetwarzania pliku' });
                }
            }

            return res.status(400).json({
                success: false,
                message: 'Nie podano żadnych danych do aktualizacji'
            });
        } catch (error) {
            logging.error('Error updating slider controller:', error);
            res.status(500).json({ success: false, message: 'Internal server error' });
        }
    }

    @Route('delete', '/slider/:id', verifyToken)
    async delete(req: Request, res: Response, next: NextFunction) {
        const sliderId = req.params.id;

        try {
            const slider = await Slider.findByPk(sliderId);
            if (!slider) {
                return res.status(404).json({ success: false, message: 'Nie znaleziono zdjęcia' });
            }

            if (slider.file) {
                await fileHelpersSlider.removeOldFile(slider.file);
            }

            await slider.destroy();

            return res.status(200).json({ success: true, message: 'Usunięto zdjęcie z slidera' });
        } catch (error) {
            logging.error('Error deleting slider:', error);
            return res.status(500).json({ success: false, message: 'Internal server error' });
        }
    }
}

export default SliderController;