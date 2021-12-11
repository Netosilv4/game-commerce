import ApiError from '../../errors/ApiError';
import Game, { gameInterface } from './schemas';

export const createGame = async (game: gameInterface) => {
  try {
    const dbResponse = await Game.create(game);
    return dbResponse;
  } catch (error : any) {
    return ApiError.badRequest(error.message);
  }
};

export const updateGame = async (game: gameInterface, id: string) => {
  try {
    const dbResponse = await Game.findByIdAndUpdate({ _id: id }, { game }, { new: true });
    return dbResponse;
  } catch (error: any) {
    return ApiError.badRequest(error.message);
  }
};

export const findGameById = async (id: string) => {
  const dbResponse = await Game.findById({ _id: id });
  if (!dbResponse) ApiError.notFound('Game not found');
  return dbResponse;
};

export const findAllGames = async () => {
  const dbResponse = await Game.find();
  if (!dbResponse.length) ApiError.notFound('Game not found');
  return dbResponse;
};
