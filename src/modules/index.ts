import express from 'express';
import categoriesRoutes from './categories';
import gameRoutes from './games';
import userRoutes from './users';

const routes = express.Router();

routes.use('/user', userRoutes);

routes.use('/game', gameRoutes);

routes.use('/categories', categoriesRoutes);

export default routes;
