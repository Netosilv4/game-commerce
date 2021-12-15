/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import { NextFunction, Response, Request } from 'express';

dotenv.config();

const JWT_SECRET = 'alou';

interface JwtPayload {
    email: string;
    password: string;
    role: string;
}

const tokenCheck = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  let { auth } = req.body;
  if (typeof auth === 'string') auth = JSON.parse(auth);
  if (!auth) return res.status(401).json({ message: 'Unauthorized' });
  if (!authorization) return res.status(401).json({ message: 'Unauthorized' });

  const token = authorization?.split(' ')[1];

  jwt.verify(token as string, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: err.message });

    if (!decoded) return res.status(401).json({ message: 'Unauthorized' });

    const payload = decoded as JwtPayload;

    switch (true) {
      case payload.email !== auth.email:
        return res.status(401).json({ message: 'Unauthorized' });
      case payload.password !== auth.password:
        return res.status(401).json({ message: 'Unauthorized' });
      case payload.role !== auth.role:
        return res.status(401).json({ message: 'Unauthorized' });
      default:
        return next();
    }
  });
};

export default tokenCheck;
