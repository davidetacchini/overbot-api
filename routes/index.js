import express from 'express';
import statistics from './statistics.js';
import commands from './commands.js';
import servers from './servers.js';

const router = express.Router();
const message = {
  status: 200,
  message: '/api root path',
  routes: {
    '/statistics': 'Get bot statistics (bot, host and shards)',
    '/commands': 'Get bot commands',
    '/servers': 'Get top five active servers',
  },
};

router.get('/', (req, res) => {
  res.status(200).json(message);
});

router.use('/statistics', statistics);
router.use('/commands', commands);
router.use('/servers', servers);

export default router;
export { message };
