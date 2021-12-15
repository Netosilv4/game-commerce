import express from 'express';
import categoriesRoutes from './categories';
import gameRoutes from './games';
import userRoutes from './users';
import orderRouter from './orders';

const routes = express.Router();

routes.use('/user', userRoutes);

routes.use('/game', gameRoutes);

routes.use('/categories', categoriesRoutes);

routes.use('/order', orderRouter);

export default routes;
