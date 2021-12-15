/* eslint-disable no-unused-vars */

import {
  NextFunction, Request, Response,
} from 'express';
import ApiError from './ApiError';

const catchError = (err: any, req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  console.error(err.message);
  if (err.name === 'MongoServerError' && err.code === 11000) {
    res.status(400).json({
      message: 'Duplicate key',
    });
  } else if (err instanceof ApiError) {
    res.status(err.statusCode).send({ message: err.message });
  } else {
    res.status(500).send({ message: 'Internal server error' });
  }
};

export default catchError;
