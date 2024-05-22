import express, { Request, Response } from "express";
import { DataControllers } from "./ecommerce.controller";

const router = express.Router();

router.post("/api/products", DataControllers.createEcommerceData);

router.get("/api/products", DataControllers.getEcommerceRoute);

router.get("/api/products/:productId", DataControllers.getSingleRoutes);

router.delete("/api/products/:productId", DataControllers.deleteSignleRoute);

export const EcommerceRoutes = router;
