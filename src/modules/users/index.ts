import express from 'express';
import rescue from 'express-rescue';
import {
  getUsers, getUserById, getUserByEmail, createUser, updateUser,
} from './controllers';

const userRoutes = express.Router();

userRoutes.get('/', rescue(getUsers));

userRoutes.get('/:id', rescue(getUserById));

userRoutes.get('/email/:email', rescue(getUserByEmail));

userRoutes.post('/create', rescue(createUser));

userRoutes.put('/update/:id', rescue(updateUser));

export default userRoutes;
