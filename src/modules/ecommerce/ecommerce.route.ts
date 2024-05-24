import express from "express";
import { DataControllers } from "./ecommerce.controller";

const router = express.Router();

// all my route

router.post("/", DataControllers.createEcommerceData);

router.get("/", DataControllers.getEcommerceRoute);

router.get("/:productId", DataControllers.getSingleRoutes);

router.put("/:productId", DataControllers.updateSingleRoute);

router.delete("/:productId", DataControllers.deleteSignleRoute);

export const EcommerceRoutes = router;
