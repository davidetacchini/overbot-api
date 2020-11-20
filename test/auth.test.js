import request from 'supertest';
import app from '../index.js';

// Testing with '/api' route but it's the same for all the routes.
describe('GET /api', () => {
  it('should require athentication', (done) => {
    request(app)
      .get('/api')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        401,
        {
          message: 'Missing authentication.',
        },
        done
      );
  });
});

describe('GET /api', () => {
  it('should return invalid token (forbidden)', (done) => {
    request(app)
      .get('/api')
      .set('Accept', 'application/json')
      .set('Authorization', 'not-a-valid-token-isnt-it')
      .expect('Content-Type', /json/)
      .expect(
        403,
        {
          message: 'Forbidden.',
        },
        done
      );
  });
});
