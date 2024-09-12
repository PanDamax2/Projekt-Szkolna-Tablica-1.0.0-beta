import request from 'supertest';
import { app, Shutdown } from '../../src/index';

describe('Application', () => {
    afterAll((done) => {
        Shutdown(done);
    });

    it('Starts and has the proper test environment', async () => {
        expect(process.env.NODE_ENV).toBe('test');
        expect(app).toBeDefined();
    }, 10000);

    it('Returns all options allowed when called from the HTTP method options', async () => {
        const response = await request(app).options('/');

        expect(response.status).toBe(200);
        expect(response.headers['access-control-allow-methods']).toBe('PUT, POST, PATCH, DELETE, GET');
    }, 10000);

    it('Returns 404 when the route requested is not found.', async () => {
        const response = await request(app).get('/a/cute/route/that/does/not/exist/');

        expect(response.status).toBe(404);
    }, 10000);
});