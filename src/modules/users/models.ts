import ApiError from '../../errors/ApiError';
import User, { userInterface } from './schemas';

export const createUser = async (user: userInterface) => {
  const dbResponse = await User.create(user);
  if (dbResponse.id) return dbResponse.id;
  return ApiError.badRequest('User not created');
};

export const findUserByEmail = async (email: string) => {
  const dbResponse = await User.findOne({ 'auth.email': email }).lean();
  if (!dbResponse) ApiError.notFound('User not found');
  return dbResponse as userInterface;
};

export const updateUser = async (user: any, id: string) => {
  try {
    const dbResponse = await User.findOneAndUpdate({ _id: id }, user, { new: true });
    return dbResponse;
  } catch (error: any) {
    return ApiError.badRequest(error.message);
  }
};

export const findUserById = async (id: string) => {
  const dbResponse = await User.findById({ id });
  if (!dbResponse) ApiError.notFound('User not found');
  return dbResponse;
};

export const findAllUsers = async () => {
  const dbResponse = await User.find();
  if (!dbResponse.length) ApiError.notFound('Users not found');
  return dbResponse;
};
