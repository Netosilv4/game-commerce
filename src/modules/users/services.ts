import ApiError from '../../errors/ApiError';
import {
  createUser, findUserById, findAllUsers, findUserByEmail, updateUser,
} from './models';
import { userInterface } from './schemas';
import generateToken from './validations/jwt';
import validateLogin from './validations/validateLogin';
import validateUser from './validations/validateUser';

export const createUserHandler = (user: userInterface) => {
  const newUser = { ...user, auth: { ...user.auth, role: 'user' } };
  const verifiedUser = validateUser(newUser);
  const response = createUser(verifiedUser);
  return response;
};

export const loginHandler = async (email: string, password: string) => {
  const user = await findUserByEmail(email);
  console.log(user);
  validateLogin(email, password);
  if (user.auth.password !== password) ApiError.unauthorized('Invalid password');
  const token = generateToken(email, password, user.auth.role);
  return { ...user, token };
};

export const findUserByIdHandler = (id: string) => {
  const response = findUserById(id);
  return response;
};

export const findAllUsersHandler = () => {
  const response = findAllUsers();
  return response;
};

export const findByEmailHandler = (email: string) => {
  const response = findUserByEmail(email);
  return response;
};

export const updateUserHandler = (id: string, user: userInterface) => {
  const verifiedUser = validateUser(user);
  const response = updateUser(verifiedUser, id);
  return response;
};
