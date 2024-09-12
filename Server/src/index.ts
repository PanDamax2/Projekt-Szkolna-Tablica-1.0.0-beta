import http from 'http';
import path from 'path';
import express from 'express';
import './config/logging';
import 'reflect-metadata';
import hpp from 'hpp';
import helmet from 'helmet';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import sequelize from './config/database';
import UserController from './controllers/userController';
import AuthController from './controllers/authController';
import ViewController from './controllers/viewController';
import declareHandler from './middleware/declareHandler';

import { server } from './config/config';
import { defineRoutes } from './modules/routes';
import { corsHandler } from './middleware/corsHandler';
import { rateLimiter } from './middleware/rateLimiter';
import { routeNotFound } from './middleware/routeNotFound';
import { loggingHandler } from './middleware/loggingHandler';
import SliderController from './controllers/sliderController';

export const app = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = async () => {
    logging.log('----------------------------------------');
    logging.log('Initializing API');
    logging.log('----------------------------------------');
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json({ limit: '5mb' }));
    app.use(compression());
    app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
    
    logging.log('----------------------------------------');
    logging.log('Connect to MySQL');
    logging.log('----------------------------------------');
    try {
        await sequelize.authenticate();
        logging.log('----------------------------------------');
        logging.log('Connection has been established successfully.');
        logging.log('----------------------------------------');
    } catch (error) {
        logging.log('----------------------------------------');
        logging.log('Unable to connect to MySQL');
        logging.error(error);
        logging.log('----------------------------------------');
    }
    
    logging.log('----------------------------------------');
    logging.log('Logging & Configuration');
    logging.log('----------------------------------------');
    app.use(corsHandler);
    app.use(declareHandler);
    app.use(loggingHandler);
    app.use(cookieParser());
    app.use(helmet());
    app.use(rateLimiter);
    app.use(hpp());

    logging.log('----------------------------------------');
    logging.log('Define Controller Routing');
    logging.log('----------------------------------------');
    defineRoutes([UserController, AuthController, ViewController, SliderController], app);

    logging.log('----------------------------------------');
    logging.log('Define Routing Error');
    logging.log('----------------------------------------');
    app.use(routeNotFound);

    logging.log('----------------------------------------');
    logging.log('Starting Server');
    logging.log('----------------------------------------');
    httpServer = http.createServer(app);
    httpServer.listen(server.SERVER_PORT, () => {
        logging.log('----------------------------------------');
        logging.log(`Server started on ${server.SERVER_HOSTNAME}:${server.SERVER_PORT}`);
        logging.log('----------------------------------------');
    });
};

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);

Main();
