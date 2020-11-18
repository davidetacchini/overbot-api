// No the best auth but it works.

import dotenv from 'dotenv';

dotenv.config();

export const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    if (token === process.env.SECRET_ACCESS_TOKEN) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden.' });
    }
  } else {
    res.status(401).json({ message: 'Missing authentication.' });
  }
};
