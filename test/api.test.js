import request from 'supertest';
import app, { secretToken } from '../index.js';

describe('GET /api', () => {
  it('should respond with "It\'s fucking working"', (done) => {
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

describe('POST /api/statistics', () => {
  it('should post bot, host and shards statistics', (done) => {
    request(app)
      .post('/api/statistics')
      .set('Authorization', secretToken)
      .send({
        bot: { Ping: 100 },
        host: { Python: '3.x' },
        shards: { 1: 100 },
      })
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});

describe('GET /api/statistics', () => {
  it('should respond with bot, host and shards statistics', (done) => {
    request(app)
      .get('/api/statistics')
      .set('Authorization', secretToken)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          bot: { Ping: 100 },
          host: { Python: '3.x' },
          shards: { 1: 100 },
        },
        done
      );
  });
});

describe('POST /api/commands', () => {
  it('should post a list of commands', (done) => {
    request(app)
      .post('/api/commands')
      .set('Authorization', secretToken)
      .send([
        {
          name: 'Rank',
          description: 'Returns player ranks',
        },
      ])
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});

describe('GET /api/commands', () => {
  it('should respond with a list of commands', (done) => {
    request(app)
      .get('/api/commands')
      .set('Authorization', secretToken)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        [
          {
            name: 'Rank',
            description: 'Returns player ranks',
          },
        ],
        done
      );
  });
});

describe('GET /api/commands/rank', () => {
  it('should respond with a command object', (done) => {
    request(app)
      .get('/api/commands/rank')
      .set('Authorization', secretToken)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          name: 'Rank',
          description: 'Returns player ranks',
        },
        done
      );
  });
});

describe('POST /api/servers', () => {
  it('should post a list of servers', (done) => {
    request(app)
      .post('/api/servers')
      .set('Authorization', secretToken)
      .send([
        {
          id: 123456789,
          name: 'Server name',
        },
      ])
      .expect(201)
      .expect('Content-Type', /json/)
      .end(function (err, res) {
        if (err) done(err);
        done();
      });
  });
});

describe('GET /api/servers', () => {
  it('should respond with a list of servers', (done) => {
    request(app)
      .get('/api/servers')
      .set('Authorization', secretToken)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        [
          {
            id: 123456789,
            name: 'Server name',
          },
        ],
        done
      );
  });
});

describe('GET /api/servers/123456789', () => {
  it('should respond with a server object', (done) => {
    request(app)
      .get('/api/servers/123456789')
      .set('Authorization', secretToken)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(
        200,
        {
          id: 123456789,
          name: 'Server name',
        },
        done
      );
  });
});
