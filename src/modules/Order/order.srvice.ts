import { TOrder } from "./order.interface";
import { Order } from "./order.model";

const sendOrderData = async (payLoad: TOrder) => {
  const result = await Order.create(payLoad);
  return result;
};

const getOrderRoute = async () => {
  const result = await Order.find();
  return result;
};

export const OrderCollection = {
  sendOrderData,
  getOrderRoute,
};
