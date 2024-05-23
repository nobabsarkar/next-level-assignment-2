import express, { Request, Response } from "express";
import { DataControllers } from "./ecommerce.controller";
import { TEcommerce } from "./ecommerce.interface";
import { Data } from "./ecommerce.model";

const router = express.Router();

router.post("/", DataControllers.createEcommerceData);

router.get("/", DataControllers.getEcommerceRoute);

router.get("/:productId", DataControllers.getSingleRoutes);

router.put("/:productId", DataControllers.updateSingleRoute);

router.delete("/:productId", DataControllers.deleteSignleRoute);

export const EcommerceRoutes = router;
