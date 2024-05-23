import express, { Request, Response } from "express";
import { EcommerceRoutes } from "./modules/ecommerce/ecommerce.route";
const app = express();

// parsers
app.use(express.json());

app.use("/api/products", EcommerceRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("*", (req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;
