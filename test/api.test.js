import request from 'supertest';
import app, { secretToken } from '../index.js';

describe('GET /api', () => {
  it('responds with "It\'s fucking working"', (done) => {
    request(app)
      .get('/api')
      .set('Authorization', secretToken)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          message: "It's fucking working",
        },
        done
      );
  });
});
