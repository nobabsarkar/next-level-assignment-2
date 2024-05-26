"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataCollection = void 0;
const ecommerce_model_1 = require("./ecommerce.model");
const sendData = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ecommerce_model_1.Data.create(payLoad);
    return result;
});
const getAllEcommerceData = (searchTerm) => __awaiter(void 0, void 0, void 0, function* () {
    if (!searchTerm) {
        const result = yield ecommerce_model_1.Data.find();
        return result;
    }
    else {
        const regex = new RegExp(searchTerm, "i");
        const result = yield ecommerce_model_1.Data.find({
            $or: [
                { name: { $regex: regex } },
                { description: { $regex: regex } },
                { category: { $regex: regex } },
            ],
        });
        return result;
    }
});
const getSingleEcommerceDatas = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ecommerce_model_1.Data.findById(id);
    return result;
});
const deleteSignleData = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ecommerce_model_1.Data.findByIdAndDelete(id);
    return result;
});
const updateSingleData = (id, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield ecommerce_model_1.Data.findByIdAndUpdate(id, { $set: payLoad }, { new: true, runValidators: true });
    console.log(result);
    return result;
});
exports.DataCollection = {
    sendData,
    getAllEcommerceData,
    getSingleEcommerceDatas,
    deleteSignleData,
    updateSingleData,
};
