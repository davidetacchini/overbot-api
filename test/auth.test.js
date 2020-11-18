import request from 'supertest';
import app from '../index.js';

// Using / api route but this cover all the routes
describe('GET /api', () => {
  it('return missing athentication', (done) => {
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
  it('return invalid token (forbidden)', (done) => {
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
