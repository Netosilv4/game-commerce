/* eslint-disable dot-notation */
import { Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import ApiError from '../../errors/ApiError';
import { findFeatured } from './models';
import Game from './schemas';
import {
  findAllGamesHandler,
  findGameByIdHandler, createGameHandler, updateGameHandler, handleOrder,
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
  let { game, auth } = req.body;
  game = JSON.parse(game);
  auth = JSON.parse(auth);
  if (auth.role !== 'admin') res.status(401).json({ message: 'Unauthorized' });
  const { files } = req;

  if (files) {
    if (!files['gameHero'] || !files['gameThumb']) {
      ApiError.badRequest('Please inform both images');
    } else {
      game.heroImage = `http://localhost:4000/uploads/${files['gameHero'][0].filename}`;
      game.thumb = `http://localhost:4000/uploads/${files['gameThumb'][0].filename}`;
      const result = await createGameHandler(game);
      res.status(200).json(result);
    }
  }
};

export const updateGame = async (req: Request, res: Response) => {
  let { game, auth } = req.body;
  game = JSON.parse(game);
  auth = JSON.parse(auth);
  if (auth.role !== 'admin') res.status(401).json({ message: 'Unauthorized' });
  const { files } = req;
  const { id } = req.params;
  if (files) {
    if (!files['gameHero'] || !files['gameThumb']) {
      ApiError.badRequest('Please inform both images');
    } else {
      game.heroImage = `http://localhost:4000/uploads/${files['gameHero'][0].filename}`;
      game.thumb = `http://localhost:4000/uploads/${files['gameThumb'][0].filename}`;
      const result = await updateGameHandler(id, game);
      res.status(200).json(result);
    }
  }
};

export const getFeatured = async (req: Request, res: Response) => {
  const featured = await findFeatured();
  res.status(200).json(featured);
};

export const postNewOrder = async (req: Request, res: Response) => {
  const { items, user } = req.body;
  const result = await handleOrder(items, user);
  res.status(200).json(result);
};

export const deleteGame = async (req: Request, res: Response) => {
  const { auth } = req.body;
  if (auth.role !== 'admin') res.status(401).json({ message: 'Unauthorized' });
  const response = await Game.deleteOne({ _id: req.params.id });
  res.status(200).json(response);
};
