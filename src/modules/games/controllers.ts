import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ApiError from '../../errors/ApiError';
import { findFeatured } from './models';
import {
  findAllGamesHandler,
  findGameByIdHandler, createGameHandler, updateGameHandler,
} from './services';

export const getGames = async (_req: Request, res: Response) => {
  const users = await findAllGamesHandler();
  res.json(users);
};

export const getGameById = async (req: Request, res: Response) => {
  const { id } = req.params;
  if (!isValidObjectId(id)) ApiError.badRequest('Invalid id');
  const user = await findGameByIdHandler(id);
  res.status(200).json(user);
};

export const createGame = async (req: Request, res: Response) => {
  const { game } = req.body;
  const result = await createGameHandler(game);
  res.status(200).json(result);
};

export const updateGame = async (req: Request, res: Response) => {
  const { game } = req.body;
  const { id } = req.params;
  const result = await updateGameHandler(id, game);
  res.status(200).json(result);
};

export const getFeatured = async (req: Request, res: Response) => {
  const featured = await findFeatured();
  res.status(200).json(featured);
};
