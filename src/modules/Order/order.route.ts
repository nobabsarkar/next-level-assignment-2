import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post("/", OrderControllers.createOrderData);

router.get("/", OrderControllers.createGetData);

export const OrderRoutes = router;
