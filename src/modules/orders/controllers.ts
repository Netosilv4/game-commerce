import { Request, Response } from 'express';
import { findOrderByUserId, findOrderById } from './models';

export const getOrdersByUserId = (req: Request, res: Response) => {
  const { userId } = req.params;
  const orders = findOrderByUserId(userId);
  res.send(orders);
};

export const getOrderById = (req: Request, res: Response) => {
  const { id } = req.params;
  const order = findOrderById(id);
  res.send(order);
};
