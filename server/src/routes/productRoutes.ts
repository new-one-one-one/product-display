import { IProduct, products } from "../models/productModel";

const express = require("express");

export const productRouter = express.Router();

productRouter.get("/products", (req: any, res: any) => {
  res.json(products);
});

productRouter.get("/products/:id", (req: any, res: any) => {
  const productId = parseInt(req.params.id);
  const product = products.find((p: IProduct) => p.id === productId);

  if (!product) {
    res.status(404).json({ message: "Product not found" });
  } else {
    res.json(product);
  }
});
