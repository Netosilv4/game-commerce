import ApiError from '../../errors/ApiError';
import Categories, { CategoriesInterface } from './schema';

export const findAllCategories = async () => {
  const dbResponse = await Categories.find();
  if (dbResponse.length === 0) ApiError.notFound('Categories not found');
  return dbResponse;
};

export const createCategory = async (category: CategoriesInterface) => {
  const dbResponse = await Categories.create(category);
  return dbResponse;
};
