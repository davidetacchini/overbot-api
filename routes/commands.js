import express from 'express';
import { commands, setCommands } from '../models/commands.js';

const router = express.Router();

const getCommands = (req, res) => {
  res.status(200).json(commands);
};

const getCommand = (req, res) => {
  res.status(200).json(
    commands.find((command) => {
      return req.params.name.toLowerCase() === command.name.toLowerCase();
    })
  );
};

const postCommands = (req, res) => {
  setCommands(req.body);
  res.status(201).json({ message: 'Commands have been posted' });
};

router.get('/', getCommands);

router.get('/:name', getCommand);

router.post('/', postCommands);

export default router;
