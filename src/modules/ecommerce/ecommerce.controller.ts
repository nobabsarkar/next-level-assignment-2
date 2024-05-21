import { Request, Response } from "express";
import { DataCollection } from "./ecommerce.service";

const postData = async (req: Request, res: Response) => {
  const postsData = req.body;
  const result = await DataCollection.sendData(postsData);

  res.json({
    success: true,
    message: "Product created successfully!",
    data: result,
  });
};

export const DataControllers = {
  postData,
};
