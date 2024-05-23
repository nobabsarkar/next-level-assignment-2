import { TEcommerce } from "./ecommerce.interface";
import { Data } from "./ecommerce.model";

const sendData = async (payLoad: TEcommerce) => {
  const result = await Data.create(payLoad);
  return result;
};

const getAllEcommerceData = async (searchTerm?: string) => {
  if (!searchTerm) {
    const result = await Data.find();
    return result;
  } else {
    console.log(searchTerm);
    const regex = new RegExp(searchTerm, "i");
    const result = await Data.find({
      $or: [
        { name: { $regex: regex } },
        { description: { $regex: regex } },
        { category: { $regex: regex } },
      ],
    });
    return result;
  }
};

const getSingleEcommerceDatas = async (id: string) => {
  const result = await Data.findById(id);
  return result;
};

const deleteSignleData = async (id: string) => {
  const result = await Data.findByIdAndDelete(id);
  return result;
};

const updateSingleData = async (id: string, payLoad: Partial<TEcommerce>) => {
  const result = await Data.findByIdAndUpdate(
    id,
    { $set: payLoad },
    { new: true, runValidators: true }
  );
  console.log(result);
  return result;
};

export const DataCollection = {
  sendData,
  getAllEcommerceData,
  getSingleEcommerceDatas,
  deleteSignleData,
  updateSingleData,
};
