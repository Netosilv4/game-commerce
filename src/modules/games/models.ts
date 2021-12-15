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

export const updateGame = async (game: any, id: string) => {
  try {
    const dbResponse = await Game.findOneAndUpdate({ _id: id }, game, { new: true });
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
  if (!dbResponse.length) ApiError.notFound('Games not found');
  return dbResponse;
};

export const findFeatured = async () => {
  const dbResponse = await Game.find({ featured: true });
  return dbResponse;
};

export const decreaseQuantity = async (id: string) => {
  const game = await findGameById(id);
  if (!game) return { error: 'Game not found' };
  if (game && game.quantity < 1) {
    return { error: `${game.name} out of stock` };
  }
  const newQuantity = game.quantity - 1;
  const dbResponse = await Game.findByIdAndUpdate({
    _id: id,
  }, { quantity: newQuantity }, { new: true });
  return dbResponse;
};

export const verifyOrder = async (id: string) => {
  const game = await findGameById(id);
  if (!game) return { error: 'Game not found' };
  if (game && game.quantity < 1) {
    return { error: `${game.name} out of stock` };
  }
  return { error: 'valid' };
};
