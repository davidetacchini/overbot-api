import request from 'supertest';
import app from '../index.js';
import dotenv from 'dotenv';

dotenv.config();

describe('app', () => {
  it('responds with a not found message', (done) => {
    request(app)
      .get('/give-me-four-o-four')
      .set('Authorization', process.env.SECRET_ACCESS_TOKEN)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(404, done);
  });
});

describe('GET /', () => {
  it('responds with "Go to /api"', (done) => {
    request(app)
      .get('/')
      .set('Authorization', process.env.SECRET_ACCESS_TOKEN)
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
