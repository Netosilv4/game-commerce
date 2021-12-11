import {
  createGame, findGameById, findAllGames, updateGame,
} from './models';
import { gameInterface } from './schemas';

export const createGameHandler = (game: gameInterface) => {
  const response = createGame(game);
  return response;
};

export const findGameByIdHandler = (id: string) => {
  const response = findGameById(id);
  return response;
};

export const findAllGamesHandler = () => {
  const response = findAllGames();
  return response;
};

export const updateGameHandler = (id: string, user: gameInterface) => {
  const response = updateGame(user, id);
  return response;
};
