import { TEcommerce } from "./ecommerce.interface";
import { Data } from "./ecommerce.model";

const sendData = async (payLoad: TEcommerce) => {
  const result = await Data.create(payLoad);
  return result;
};

const getAllEcommerceData = async () => {
  const result = await Data.find();
  return result;
};

const getSingleEcommerceDatas = async (id: string) => {
  const result = await Data.findById(id);
  return result;
};

const deleteSignleData = async (id: string) => {
  const result = await Data.findByIdAndDelete(id);
  return result;
};

export const DataCollection = {
  sendData,
  getAllEcommerceData,
  getSingleEcommerceDatas,
  deleteSignleData,
};
