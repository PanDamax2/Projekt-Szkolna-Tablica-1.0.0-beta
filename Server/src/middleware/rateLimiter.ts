import { Request, Response, NextFunction } from 'express';
import rateLimit, { RateLimitRequestHandler } from 'express-rate-limit';
import fs from 'fs/promises';
import path from 'path';
import { PRODUCTION } from '../config/config';

const logFilePath = path.join(__dirname, '..', 'logs', 'rateLimit.log');

function formatDate(date: Date): string {
    return date.toISOString().replace('T', ' ').slice(0, 19);
}

async function ensureLogsDirectoryExists(): Promise<void> {
    const logsDir = path.dirname(logFilePath);
    try {
        await fs.access(logsDir);
    } catch {
        await fs.mkdir(logsDir, { recursive: true });
    }
}

async function logAttack(req: Request): Promise<void> {
    console.error(`IP ${req.ip} exceeded the request limit.`);

    if (PRODUCTION) await ensureLogsDirectoryExists()

    const formattedDate = formatDate(new Date());
    const logEntry = `IP ${req.ip} exceeded the request limit. Date: ${formattedDate}\n`;

    try {
        await fs.appendFile(logFilePath, logEntry);
    } catch (err) {
        console.error('Error writing to log file', err);
    }
}

const limiter: RateLimitRequestHandler = rateLimit({
    windowMs: 15 * 60 * 1000,   // 15 minutes
    max: 130,                   // 130 requests per windowMs
    message: { message: "Too many requests from this IP, please try again after 15 minutes" },
    standardHeaders: true,
    legacyHeaders: false,
    handler: async (req: Request, res: Response) => {
        res.status(429).json({ message: "Too many requests from this IP, please try again after 15 minutes" });
        await logAttack(req);
    }
});

export function rateLimiter(req: Request, res: Response, next: NextFunction): void {
    limiter(req, res, next);
}