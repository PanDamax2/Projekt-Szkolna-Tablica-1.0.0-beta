import fs from 'fs/promises';
import path from 'path';

const uploadsDir = path.join(__dirname, '..', '..', 'src', 'uploads');

export const fileHelpersView = {
    async saveNewFile(file: Express.Multer.File, viewId: string): Promise<string> {
        const fileExtension = path.extname(file.originalname);
        const newFileName = `school_logo_${viewId}_${Date.now()}${fileExtension}`;
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