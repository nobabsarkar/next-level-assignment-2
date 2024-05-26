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
exports.DataControllers = void 0;
const ecommerce_service_1 = require("./ecommerce.service");
// import ecommerceValidation from "./ecommerce.validation";
const createEcommerceData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const zoodparsedData = ecommerceValidation.parse(req.body);
        const result = yield ecommerce_service_1.DataCollection.sendData(req.body);
        // const result = await DataCollection.sendData(zoodparsedData);
        res.json({
            success: true,
            message: "Product created successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const getEcommerceRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const searchQuery = req.query.searchTerm;
    if (!searchQuery) {
        const result = yield ecommerce_service_1.DataCollection.getAllEcommerceData();
        try {
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
        catch (err) {
            console.log(err);
        }
    }
    else {
        const result = yield ecommerce_service_1.DataCollection.getAllEcommerceData(searchQuery);
        try {
            res.status(200).json({
                success: true,
                message: "Products fetched successfully!",
                data: result,
            });
        }
        catch (err) {
            console.log(err);
        }
    }
});
const getSingleRoutes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId } = req.params;
    const result = yield ecommerce_service_1.DataCollection.getSingleEcommerceDatas(productId);
    try {
        res.status(200).json({
            success: true,
            message: "Product fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const deleteSignleRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.body;
        const result = yield ecommerce_service_1.DataCollection.deleteSignleData(productId);
        res.status(200).json({
            success: true,
            message: "Product deleted successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
const updateSingleRoute = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { productId } = req.params;
        const dataCollections = req.body;
        const result = yield ecommerce_service_1.DataCollection.updateSingleData(productId, dataCollections);
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            data: result,
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.DataControllers = {
    createEcommerceData,
    getEcommerceRoute,
    getSingleRoutes,
    deleteSignleRoute,
    updateSingleRoute,
};
