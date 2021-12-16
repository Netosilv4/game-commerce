import express, { Request, Response } from 'express';
import cors from 'cors';
import path from 'path';
import catchError from './errors/errorMiddleware';
import routes from './modules';
import populateDb from './scripts/populateDb';

populateDb();

const PORT = 4000;

const app = express();

app.use(express.json());

app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Ok!');
});

app.use('/uploads', express.static(path.resolve(__dirname, 'uploads')));

app.use(routes);

app.use(catchError);

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
