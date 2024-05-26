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
exports.OrderControllers = void 0;
const order_srvice_1 = require("./order.srvice");
const createOrderData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_srvice_1.OrderCollection.sendOrderData(req.body);
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Order not found",
            error: err,
        });
    }
});
const createGetData = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield order_srvice_1.OrderCollection.getOrderRoute();
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result,
        });
    }
    catch (err) {
        res.status(500).json({
            success: false,
            message: "Order not found",
            error: err,
        });
    }
});
exports.OrderControllers = {
    createOrderData,
    createGetData,
};
