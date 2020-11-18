import request from 'supertest';
import app from '../index.js';

describe('app', () => {
  it('responds with a not found message', (done) => {
    request(app)
      .get('/give-me-four-o-four')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});

describe('GET /', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/')
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
