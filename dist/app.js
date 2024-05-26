"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ecommerce_route_1 = require("./modules/ecommerce/ecommerce.route");
const order_route_1 = require("./modules/Order/order.route");
const app = (0, express_1.default)();
// parsers
app.use(express_1.default.json());
app.use("/api/products", ecommerce_route_1.EcommerceRoutes);
app.use("/api/orders", order_route_1.OrderRoutes);
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use("*", (req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});
exports.default = app;
