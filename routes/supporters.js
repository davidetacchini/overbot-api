import express from 'express';
import { supporters, setSupporters } from '../models/supporters.js';

const router = express.Router();

const getSupporters = (req, res) => {
  res.status(200).json(supporters);
};

const postSupporters = (req, res) => {
  setSupporters(req.body);
  res.status(201).json({ success: 'Supporters have been successfully posted' });
};

router.get('/', getSupporters);

router.post('/', postSupporters);

export default router;
