import dotenv from 'dotenv';
dotenv.config();

export const DEVELOPMENT = process.env.NODE_ENV === 'development';
export const TEST = process.env.NODE_ENV === 'test';
export const PRODUCTION = process.env.NODE_ENV === 'production';

export const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
export const SERVER_PORT = process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 12345;

export const ADMIN_PANEL_URL = process.env.ADMIN_PANEL_URL || 'http://localhost:5137';

// mysql
const MYSQL_HOSTNAME = process.env.MYSQL_HOSTNAME || '';
const MYSQL_PORT = process.env.MYSQL_PORT || '';
const MYSQL_USER = process.env.MYSQL_USER || '';
const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD || '';
const MYSQL_DATABASE = process.env.MYSQL_DATABASE || '';

// jwt
export const JWT_SECRET = process.env.JWT_SECRET || '';

// email
export const MAILTRAP_TOKEN = process.env.MAILTRAP_TOKEN || '';

export const mysql = {
    MYSQL_HOSTNAME,
    MYSQL_PORT,
    MYSQL_USER,
    MYSQL_PASSWORD,
    MYSQL_DATABASE
};

export const server = {
    SERVER_HOSTNAME,
    SERVER_PORT
};
