import ApiError from '../../errors/ApiError';
import Orders from './schema';

export const findAllOrders = async () => {
  const dbResponse = await Orders.find();
  if (dbResponse.length === 0) ApiError.notFound('Orders not found');
  return dbResponse;
};

export const createOrder = async (order: any) => {
  const dbResponse = await Orders.create(order);
  return dbResponse;
};

export const findOrderById = async (id: string) => {
  const dbResponse = await Orders.findById(id);
  if (!dbResponse) ApiError.notFound('Order not found');
  return dbResponse;
};

export const findOrderByUserId = async (userId: string) => {
  const dbResponse = await Orders.find({ userId });
  if (!dbResponse) ApiError.notFound('Order not found');
  return dbResponse;
};
