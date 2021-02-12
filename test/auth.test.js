import request from 'supertest';
import app from '../index.js';

// Testing with '/api/statistics' route but it's the same for all the other routes
describe('POST /api/statistics', () => {
  it('should post bot, host and shards statistics', (done) => {
    request(app)
      .post('/api/statistics')
      .send({
        bot: { Ping: 100 },
        host: { Python: '3.x' },
        shards: { 1: 100 },
      })
      .expect('Content-Type', /json/)
      .expect(
        401,
        {
          error: 'Missing authentication token',
        },
        done
      );
  });
});

describe('POST /api/statistics', () => {
  it('should post bot, host and shards statistics', (done) => {
    request(app)
      .post('/api/statistics')
      .set('Authorization', 'wrongtoken')
      .send({
        bot: { Ping: 100 },
        host: { Python: '3.x' },
        shards: { 1: 100 },
      })
      .expect('Content-Type', /json/)
      .expect(
        403,
        {
          error: 'Wrong access token',
        },
        done
      );
  });
});
