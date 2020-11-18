// No the best auth but it works.
import { secretToken } from '../index.js';

export const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    if (token === secretToken) {
      next();
    } else {
      res.status(403).json({ message: 'Forbidden.' });
    }
  } else {
    res.status(401).json({ message: 'Missing authentication.' });
  }
};
