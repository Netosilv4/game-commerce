/* eslint-disable no-unused-vars */

import {
  ErrorRequestHandler, NextFunction, Request, Response,
} from 'express';
import ApiError from './ApiError';

const catchError = (err: ErrorRequestHandler, req: Request, res: Response, _next: NextFunction) => {
  console.log(err);
  if (err instanceof ApiError) {
    res.status(err.statusCode).send(err.message);
  } else {
    res.status(500).send('Something went wrong');
  }
};

export default catchError;
