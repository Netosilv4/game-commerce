import {
  createUser, findUserById, findAllUsers, findUserByEmail, updateUser,
} from './models';
import { userInterface } from './schemas';

export const createUserHandler = (user: userInterface) => {
  const response = createUser(user);
  return response;
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
  const response = updateUser(user, id);
  return response;
};
