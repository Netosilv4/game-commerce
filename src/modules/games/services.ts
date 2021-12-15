/* eslint-disable no-underscore-dangle */
import path from 'path';
import { execSync } from 'child_process';
import {
  createGame, findGameById, findAllGames, updateGame, decreaseQuantity, verifyOrder,
} from './models';
import { gameInterface } from './schemas';
import ApiError from '../../errors/ApiError';
import { createOrder } from '../orders/models';
import { userInterface } from '../users/schemas';
import validateGame from './validations/validateGame';

export const createGameHandler = async (game: gameInterface) => {
  const filePath = path.resolve(__dirname, '..', '..', 'uploads');
  const gameHeroPath = path.resolve(filePath, 'gameHero.png');
  const gameThumbPath = path.resolve(filePath, 'gameThumb.png');

  const { error, value } = validateGame(game);
  if (error) return ApiError.badRequest(error.details[0].message);
  const response = await createGame(value);
  if (response) {
    execSync(`mv ${gameHeroPath} ${path.resolve(filePath, String(response._id))}gameHero.png`);
    execSync(`mv ${gameThumbPath} ${path.resolve(filePath, String(response._id))}gameThumb.png`);
    value.heroImage = `http://localhost:4000/uploads/${String(response._id)}gameHero.png`;
    value.thumb = `http://localhost:4000/uploads/${String(response._id)}gameThumb.png`;
    const result = await updateGame(value, response._id);
    return result;
  }
  return ApiError.badRequest('Something went wrong');
};

export const findGameByIdHandler = (id: string) => {
  const response = findGameById(id);
  return response;
};

export const findAllGamesHandler = () => {
  const response = findAllGames();
  return response;
};

export const updateGameHandler = (id: string, game: gameInterface) => {
  const { error, value } = validateGame(game);
  if (error) return ApiError.badRequest(error.details[0].message);
  const response = updateGame(value, id);
  return response;
};

export const handleOrder = async (games: gameInterface[], user: userInterface) => {
  if (!games) return ApiError.badRequest('Empty order');

  const isValid = await Promise.all(games.map((e: gameInterface) => verifyOrder(e._id)));

  const isEnough = isValid.find((e) => e.error !== 'valid');

  if (isEnough) return ApiError.badRequest(isEnough.error);

  const request = await Promise.all(
    games.map((game: gameInterface) => decreaseQuantity(game._id)),
  );

  const order = { data: request, userId: user._id };
  if (order) {
    await createOrder(order);
    return order;
  }
  return ApiError.badRequest('Internal server error');
};
