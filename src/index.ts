import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import catchError from './errors/errorMiddleware';
import routes from './modules';

dotenv.config();

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Ok!');
});

app.use(routes);

app.use(catchError);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
