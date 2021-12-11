import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ApiError from '../../errors/ApiError';
import {
  findAllUsersHandler,
  findUserByIdHandler, findByEmailHandler, createUserHandler, updateUserHandler,
} from './services';

export const getUsers = async (_req: Request, res: Response) => {
  const users = await findAllUsersHandler();
  res.json(users);
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) ApiError.badRequest('Invalid id');
  const user = await findUserByIdHandler(id);
  res.status(200).json(user);
};

export const getUserByEmail = async (req: Request, res: Response) => {
  const { email } = req.params;
  if (!email) ApiError.badRequest('Invalid email');
  const user = await findByEmailHandler(email);
  res.status(200).json(user);
};

export const createUser = async (req: Request, res: Response) => {
  console.log(req);
  const { user } = req.body;
  const result = await createUserHandler(user);
  res.status(200).json(result);
};

export const updateUser = async (req: Request, res: Response) => {
  const { user } = req.body;
  const { id } = req.params;
  const result = await updateUserHandler(id, user);
  res.status(200).json(result);
};
