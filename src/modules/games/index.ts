import express from 'express';
import rescue from 'express-rescue';
import {
  getGames, getGameById, createGame, updateGame, getFeatured,
} from './controllers';

const gameRoutes = express.Router();

gameRoutes.post('/create', rescue(createGame));

gameRoutes.get('/featured', rescue(getFeatured));

gameRoutes.get('/', rescue(getGames));

gameRoutes.get('/:id', rescue(getGameById));

gameRoutes.put('/update/:id', rescue(updateGame));

export default gameRoutes;
