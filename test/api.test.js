import request from 'supertest';
import app from '../index.js';
import dotenv from 'dotenv';

dotenv.config();

describe('GET /api', () => {
  it('responds with "It\'s fucking working"', (done) => {
    request(app)
      .get('/api')
      .set('Authorization', process.env.SECRET_ACCESS_TOKEN)
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
