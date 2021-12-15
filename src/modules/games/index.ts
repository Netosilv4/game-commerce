import express from 'express';
import rescue from 'express-rescue';
import tokenCheck from '../users/middlewares/tokenCheck';
import {
  getGames, getGameById, createGame, updateGame, getFeatured, postNewOrder, deleteGame,
} from './controllers';
import multerUpload from './middlewares/multerUpload';

const gameRoutes = express.Router();

gameRoutes.post('/create', rescue(multerUpload), tokenCheck, rescue(createGame));

gameRoutes.get('/featured', rescue(getFeatured));

gameRoutes.get('/', rescue(getGames));

gameRoutes.get('/:id', rescue(getGameById));

gameRoutes.put('/update/:id', rescue(multerUpload), tokenCheck, rescue(updateGame));

gameRoutes.post('/order', tokenCheck, rescue(postNewOrder));

gameRoutes.post('/delete/:id', tokenCheck, rescue(deleteGame));

export default gameRoutes;
