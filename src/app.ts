import express, { Request, Response } from "express";
import { EcommerceRoutes } from "./modules/ecommerce/ecommerce.route";
const app = express();

// parsers
app.use(express.json());

app.use("/", EcommerceRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
