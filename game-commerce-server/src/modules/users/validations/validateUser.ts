import Joi from 'joi';
import ApiError from '../../../errors/ApiError';

const validateUser = (user: any) => {
  const schema = Joi.object().keys({
    _id: Joi.string(),
    auth: Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().min(6).required(),
      role: Joi.string().valid('admin', 'user').required(),
    }),
    profile: Joi.object().keys({
      firstName: Joi.string().min(3).required(),
      lastName: Joi.string().min(3).required(),
      avatar: Joi.string(),
    }),
    address: Joi.object().keys({
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      zip: Joi.number().required(),
      country: Joi.string().required(),
    }),
    createdAt: Joi.date(),
    updatedAt: Joi.date(),
    __v: Joi.number(),
  });

  const { error, value } = schema.validate(user);
  if (error) ApiError.badRequest(error.details[0].message);
  return value;
};

export default validateUser;
