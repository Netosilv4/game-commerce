import mongoose from '../../connection';
import { gameInterface } from '../games/schemas';

export interface OrdersInterfaces extends mongoose.Document {
  data: gameInterface & {_id: any } | { error: string} | null[];
  userId: string;
}

const orderSchema = new mongoose.Schema({
  data: {
    type: Object,
    required: true,
  },
  userId: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Orders = mongoose.model<OrdersInterfaces>('orders', orderSchema);

export default Orders;
