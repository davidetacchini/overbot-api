import express from 'express';
import commands from '../models/commands.js';

const router = express.Router()

const getCommands = (req, res) => {
    res.status(200).json(commands)
}

const getCommand = (req, res) => {
    res.status(200).json(commands.find((command) => {
        return req.params.name === command.name
    }))
}

const postCommands = (req, res) => {
    req.body.forEach(command => {
        let index = commands.findIndex(c => c.name == command.name)
        if (index === -1) {
            commands.push(command)
        }
    });
    res.status(201).json({ message: "Commands have been posted" })
}

router.get('/', getCommands)

router.get('/:name', getCommand)

router.post('/', postCommands)

export default router;