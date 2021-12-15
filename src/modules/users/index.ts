import express from 'express';
import rescue from 'express-rescue';
import {
  getUsers, getUserById, getUserByEmail, createUser, updateUser, postLogin,
} from './controllers';
import tokenCheck from './middlewares/tokenCheck';

const userRoutes = express.Router();

userRoutes.get('/', tokenCheck, rescue(getUsers));

userRoutes.get('/:id', tokenCheck, rescue(getUserById));

userRoutes.get('/email/:email', tokenCheck, rescue(getUserByEmail));

userRoutes.post('/create', tokenCheck, rescue(createUser));

userRoutes.put('/update/:id', tokenCheck, rescue(updateUser));

userRoutes.post('/login', rescue(postLogin));
export default userRoutes;
