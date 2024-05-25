import { Request, Response } from "express";
import { DataCollection } from "./ecommerce.service";
import { z } from "zod";
import { TEcommerce } from "./ecommerce.interface";
import ecommerceValidation from "./ecommerce.validation";
import TEcommerceSchema from "./ecommerce.validation";

const createEcommerceData = async (req: Request, res: Response) => {
  try {
    const zoodparsedData = ecommerceValidation.parse(req.body);

    const result = await DataCollection.sendData(req.body);
    // const result = await DataCollection.sendData(zoodparsedData);
    res.json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getEcommerceRoute = async (req: Request, res: Response) => {
  const searchQuery = req.query.searchTerm as string;

  if (!searchQuery) {
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
  } else {
    const result = await DataCollection.getAllEcommerceData(searchQuery);
    try {
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    } catch (err) {
      console.log(err);
    }
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

const updateSingleRoute = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const dataCollections: Partial<TEcommerce> = req.body;
    const result = await DataCollection.updateSingleData(
      productId,
      dataCollections
    );
    res.status(200).json({
      success: true,
      message: "Product updated successfully!",
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
  updateSingleRoute,
};
