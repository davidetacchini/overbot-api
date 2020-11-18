import express from 'express';
import servers from '../models/servers.js';

const router = express.Router();

const getServers = (req, res) => {
  res.status(200).json(servers);
};

const getServer = (req, res) => {
  res.status(200).json(
    servers.find((server) => {
      return req.params.id === server.id;
    })
  );
};

const postServers = (req, res) => {
  req.body.forEach((server) => {
    let index = servers.findIndex((s) => s.id === server.id);
    if (index === -1) {
      servers.push(server);
    }
  });
  res.status(201).json({ message: 'Servers have been posted' });
};

router.get('/', getServers);

router.get('/:id', getServer);

router.post('/', postServers);

export default router;
