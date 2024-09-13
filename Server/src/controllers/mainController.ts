import fs from 'fs/promises';
import { Route } from '../decorators/route';
import { Controller } from '../decorators/controller';
import { Request, Response, NextFunction } from 'express';
import path from 'path';

@Controller('')
class MainController {
    @Route('get', '/')
    async get(req: Request, res: Response, next: NextFunction) {
        const filePath = path.resolve(__dirname, '../public/index.html');

        try {
            const data = await fs.readFile(filePath, 'utf-8');
            const serverStatus = 'włączony';
            const updatedHtml = data.replace('{SERVER_STATUS}', serverStatus);
            res.status(200).send(updatedHtml);
        } catch (err) {
            res.status(500).send('Error reading the HTML file.');
        }
    }
}

export default MainController;