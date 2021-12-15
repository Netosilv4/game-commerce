import { Request, Response } from 'express';
import { createCategory, findAllCategories } from './models';

export const getAllCategories = async (req: Request, res: Response) => {
  const categories = await findAllCategories();
  res.status(200).json(categories);
};

export const insertCategory = async (req: Request, res: Response) => {
  const { auth } = req.body;
  if (auth.role !== 'admin') res.status(401).json({ message: 'Unauthorized' });
  const { category } = req.body;
  const response = await createCategory(category);
  res.status(200).json(response);
};
