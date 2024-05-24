import { Request, Response } from "express";
import { OrderCollection } from "./order.srvice";

const createOrderData = async (req: Request, res: Response) => {
  try {
    const result = await OrderCollection.sendOrderData(req.body);
    res.json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const OrderControllers = {
  createOrderData,
};
