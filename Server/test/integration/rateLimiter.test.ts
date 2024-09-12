import request from 'supertest';
import express, { Express } from 'express';
import { rateLimiter } from '../../src/middleware/rateLimiter';

describe('Rate Limiter Middleware', () => {
    let app: Express;
    let originalConsoleError: typeof console.error;

    beforeAll(() => {
        originalConsoleError = console.error;
        console.error = jest.fn(); 
    });

    afterAll(() => {
        console.error = originalConsoleError;
    });

    beforeEach(() => {
        app = express();
        app.use(rateLimiter);
        app.get('/test', (req, res) => res.status(200).json({ message: 'Success' }));
    });

    it('should allow requests within the rate limit', async () => {
        for (let i = 0; i < 10; i++) {
            const response = await request(app).get('/test');
            expect(response.status).toBe(200);
            expect(response.body).toEqual({ message: 'Success' });
        }
    });

    it('should block requests that exceed the rate limit', async () => {
        for (let i = 0; i < 130; i++) {
            await request(app).get('/test');
        }

        const response = await request(app).get('/test');
        expect(response.status).toBe(429);
        expect(response.body).toEqual({ message: "Too many requests from this IP, please try again after 15 minutes" });
    });

    it('should return appropriate headers', async () => {
        const response = await request(app).get('/test');
        expect(response.headers).toHaveProperty('ratelimit-limit');
        expect(response.headers).toHaveProperty('ratelimit-remaining');
        expect(response.headers).toHaveProperty('ratelimit-reset');
    });

    it('should reset the limit after the specified window', async () => {
        jest.useFakeTimers();

        for (let i = 0; i < 130; i++) {
            await request(app).get('/test');
        }

        let response = await request(app).get('/test');
        expect(response.status).toBe(429);

        jest.advanceTimersByTime(15 * 60 * 1000);

        response = await request(app).get('/test');
        expect(response.status).toBe(200);

        jest.useRealTimers();
    });
});
