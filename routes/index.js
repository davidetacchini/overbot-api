import express from 'express';
import statistics from './statistics.js';
import commands from './commands.js';
import servers from './servers.js';
import supporters from './supporters.js';

const router = express.Router();
const message = {
  status: 200,
  message: '/api root path',
  routes: {
    '/statistics': 'Get bot statistics (bot, host and shards)',
    '/commands': 'Get bot commands',
    '/servers': 'Get top five active servers',
    '/supporters': 'Get all premium members/servers',
  },
};

router.get('/', (req, res) => {
  res.status(200).json(message);
});

router.use('/statistics', statistics);
router.use('/commands', commands);
router.use('/servers', servers);
router.use('/supporters', supporters);

export default router;
export { message };
