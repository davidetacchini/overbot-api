import request from 'supertest';
import app, { secretToken } from '../index.js';

describe('app', () => {
  it('should respond with a not found message', (done) => {
    request(app)
      .get('/give-me-four-o-four')
      .set('Authorization', secretToken)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});

describe('GET /', () => {
  it('should respond with "Go to /api"', (done) => {
    request(app)
      .get('/')
      .set('Authorization', secretToken)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          message: 'Go to /api',
        },
        done
      );
  });
});
