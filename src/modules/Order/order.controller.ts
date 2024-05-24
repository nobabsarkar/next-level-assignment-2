import { Request, Response } from "express";
import { OrderCollection } from "./order.srvice";

const createOrderData = async (req: Request, res: Response) => {
  try {
    const result = await OrderCollection.sendOrderData(req.body);
    res.status(200).json({
      success: true,
      message: "Order created successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Order not found",
      error: err,
    });
  }
};

const createGetData = async (req: Request, res: Response) => {
  try {
    const result = await OrderCollection.getOrderRoute();
    res.status(200).json({
      success: true,
      message: "Orders fetched successfully!",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Order not found",
      error: err,
    });
  }
};

export const OrderControllers = {
  createOrderData,
  createGetData,
};
