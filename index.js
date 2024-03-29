import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import routes from './routes/index.js';
import { notFound, errorHandler } from './middlewares/errors.js';
import { authenticateToken } from './middlewares/auth.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const secretToken = process.env.SECRET_ACCESS_TOKEN;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Go to /api' });
});

// only use token for post requests
app.post('*', (req, res, next) => {
  authenticateToken(req, res, next);
});

app.use('/api', routes);
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

export default app;
export { secretToken };
