import Joi from 'joi';

const gameSchema = Joi.object().keys({
  _id: Joi.string(),
  name: Joi.string().min(3).required(),
  genres: Joi.array().items(Joi.string()).required(),
  publisher: Joi.string().min(3).required(),
  description: Joi.string().min(3).required(),
  releaseDate: Joi.date().required(),
  rate: Joi.number().min(1).max(10).required(),
  heroImage: Joi.string().required(),
  thumb: Joi.string().required(),
  numberOfPlayers: Joi.number().min(1).required(),
  multiplayerPlayers: Joi.number().min(0).required(),
  quantity: Joi.number().min(0).required(),
  featured: Joi.boolean().required(),
  price: Joi.number().min(0).required(),
  __v: Joi.number(),
});

const validateGame = (game: any) => gameSchema.validate(game);

export default validateGame;
