"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EcommerceRoutes = void 0;
const express_1 = __importDefault(require("express"));
const ecommerce_controller_1 = require("./ecommerce.controller");
const router = express_1.default.Router();
// all my route
router.post("/", ecommerce_controller_1.DataControllers.createEcommerceData);
router.get("/", ecommerce_controller_1.DataControllers.getEcommerceRoute);
router.get("/:productId", ecommerce_controller_1.DataControllers.getSingleRoutes);
router.put("/:productId", ecommerce_controller_1.DataControllers.updateSingleRoute);
router.delete("/:productId", ecommerce_controller_1.DataControllers.deleteSignleRoute);
exports.EcommerceRoutes = router;
