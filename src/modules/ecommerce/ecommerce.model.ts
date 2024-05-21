import { Schema, model } from "mongoose";
import {
  TEcommerce,
  TInventory,
  TTagsArray,
  TVariants,
} from "./ecommerce.interface";

const tags = new Schema<TTagsArray>({
  computer: { type: String, required: true },
  peripherals: { type: String, required: true },
  wireless: { type: String, required: true },
  ergonomic: { type: String, required: true },
});

const variants = new Schema<TVariants>({
  type: { type: String, required: true },
  value: { type: String, required: true },
});

const inventory = new Schema<TInventory>({
  quantity: { type: Number, required: true },
  inStock: { type: Boolean, required: true, default: false },
});

const ecommerceSchema = new Schema<TEcommerce>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: [tags],
  variants: [variants],
  inventory: [inventory],
});

export const Data = model<TEcommerce>("Data", ecommerceSchema);
