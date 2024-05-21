import { TEcommerce } from "./ecommerce.interface";
import { Data } from "./ecommerce.model";

const sendData = async (payLoad: TEcommerce) => {
  const result = await Data.create(payLoad);
  return result;
};

export const DataCollection = {
  sendData,
};
