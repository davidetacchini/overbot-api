import express from 'express';
import { servers, setServers } from '../models/servers.js';

const router = express.Router();

const getServers = (req, res) => {
  res.status(200).json(servers);
};

const getServer = (req, res) => {
  res.status(200).json(
    servers.find((server) => {
      return req.params.id == server.id;
    })
  );
};

const postServers = (req, res) => {
  setServers(req.body);
  res.status(201).json({ message: 'Servers have been posted' });
};

router.get('/', getServers);

router.get('/:id', getServer);

router.post('/', postServers);

export default router;
