import express from 'express';
import rescue from 'express-rescue';
import {
  getGames, getGameById, createGame, updateGame,
} from './controllers';

const gameRoutes = express.Router();

gameRoutes.get('/', rescue(getGames));

gameRoutes.get('/:id', rescue(getGameById));

gameRoutes.post('/create', rescue(createGame));

gameRoutes.put('/update/:id', rescue(updateGame));

export default gameRoutes;
