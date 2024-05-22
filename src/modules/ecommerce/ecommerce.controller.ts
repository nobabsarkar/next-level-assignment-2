import { Request, Response } from "express";
import { DataCollection } from "./ecommerce.service";

const createEcommerceData = async (req: Request, res: Response) => {
  const result = await DataCollection.sendData(req.body);
  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

const getEcommerceRoute = async (req: Request, res: Response) => {
  const result = await DataCollection.getAllEcommerceData();
  try {
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleRoutes = async (req: Request, res: Response) => {
  const { productId } = req.params;

  const result = await DataCollection.getSingleEcommerceDatas(productId);
  try {
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const deleteSignleRoute = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;
    const result = await DataCollection.deleteSignleData(productId);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const DataControllers = {
  createEcommerceData,
  getEcommerceRoute,
  getSingleRoutes,
  deleteSignleRoute,
};
