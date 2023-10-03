import * as fs from "fs";
import { logger } from "../utils/logger";
import { IProduct, products } from "../models/productModel";
import path from "path";

const dataFilePath = "../../data/products/list.json";

export const loadProductsData = () => {
  try {
    const jsonPath = path.join(__dirname);
    console.log("__dirname", __dirname);
    const rawData = fs.readFileSync(dataFilePath, "utf-8");
    // @ts-ignore
    const jsonData: Array<IProduct> = JSON.parse(rawData);
    console.log({ jsonData });
    products.push(...jsonData);
    logger.info("Product data loaded successfully.");
  } catch (error: any) {
    logger.error("Error loading product data:", error);
  }
};
