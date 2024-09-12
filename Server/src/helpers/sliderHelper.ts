import fs from 'fs/promises';
import path from 'path';
import Slider from '../models/slider.models';

export function sliderRemoveTimestamps(slider: Slider) {
    const { createdAt, updatedAt, ...sliderWithoutTimestamps } = slider.get({ plain: true });
    return sliderWithoutTimestamps;
}

const uploadsDir = path.join(__dirname, '..', '..', 'src', 'uploads');

export const fileHelpersSlider = {
    async saveNewFile(file: Express.Multer.File, viewId: string): Promise<string> {
        const fileExtension = path.extname(file.originalname);
        const newFileName = `slider_${viewId}_${Date.now()}${fileExtension}`;
        const newFilePath = path.join(uploadsDir, newFileName);

        try {
            await fs.mkdir(uploadsDir, { recursive: true });
            await fs.rename(file.path, newFilePath);
            return `/uploads/${newFileName}`;
        } catch (error) {
            logging.error('Error saving new file:', error);
            throw new Error('Failed to save new file');
        }
    },

    async removeOldFile(filePath: string): Promise<void> {
        const fullPath = path.join(__dirname, '..', '..', 'src', filePath);
        try {
            await fs.unlink(fullPath);
        } catch (error) {
            logging.warn(`Nie można usunąć starego pliku: ${fullPath}`);
        }
    }
};
