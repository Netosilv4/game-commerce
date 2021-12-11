import express from 'express';
import gameRoutes from './games';
import userRoutes from './users';

const routes = express.Router();

routes.use('/user', userRoutes);

routes.use('/game', gameRoutes);

export default routes;
