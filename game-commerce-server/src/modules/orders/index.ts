import rescue from 'express-rescue';
import tokenCheck from '../users/middlewares/tokenCheck';
import { getOrdersByUserId, getOrderById } from './controllers';

const orderRouter = require('express').Router();

orderRouter.get('/:id', tokenCheck, rescue(getOrderById));

orderRouter.get('/:userid', tokenCheck, rescue(getOrdersByUserId));

export default orderRouter;
