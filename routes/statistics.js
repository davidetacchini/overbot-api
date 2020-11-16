import express from 'express';
import statistics from '../models/statistics.js';

const router = express.Router()

const getStatistcs = (req, res) => {
    res.status(200).json(statistics)
}

const postStatistics = (req, res) => {
    statistics.bot = req.body.bot
    statistics.host = req.body.host
    statistics.shards = req.body.shards
    res.status(201).json({ message: "Statistics have been posted" })
}

router.get('/', getStatistcs)

router.post('/', postStatistics)

export default router;