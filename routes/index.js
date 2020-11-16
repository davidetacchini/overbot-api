import express from 'express';
import statistics from './statistics.js';
import commands from './commands.js';
import servers from './servers.js';

const router = express.Router()

router.get("/", (req, res) => {
    res.status(200).json({ message: "It's fucking working" })
})

router.use("/statistics", statistics)
router.use("/commands", commands)
router.use("/servers", servers)

export default router;