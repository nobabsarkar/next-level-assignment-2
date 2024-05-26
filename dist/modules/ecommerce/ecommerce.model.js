"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Data = void 0;
const mongoose_1 = require("mongoose");
const tagsName = new mongoose_1.Schema({
    computer: { type: String, required: true },
    peripherals: { type: String, required: true },
    wireless: { type: String, required: true },
    ergonomic: { type: String, required: true },
});
const variantsName = new mongoose_1.Schema({
    type: { type: String, required: true },
    value: { type: String, required: true },
});
const inventory = new mongoose_1.Schema({
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
});
const ecommerceSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    tags: { tagsName },
    variants: [{ variantsName }],
    inventory: [inventory],
});
exports.Data = (0, mongoose_1.model)("Data", ecommerceSchema);
