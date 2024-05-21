import express from "express";
import { DataControllers } from "./ecommerce.controller";

const router = express.Router();

router.post("/", DataControllers.postData);
