import * as fs from "fs";
import { logger } from "../utils/logger";
import { IProduct, products } from "../models/productModel";

const dataFilePath = __dirname + "/../../data/products/list.json";

/**
 * @function loadProductsData
 *
 * This function load the product data one time on starting the
 * application.
 */

export const loadProductsData = () => {
  try {
    const rawData = fs.readFileSync(dataFilePath, "utf-8");
    const jsonData: Array<IProduct> = JSON.parse(rawData);
    products.push(...jsonData);
    logger.info("Product data loaded successfully.");
    logger.info(`Number of product records loaded ${products.length}`);
  } catch (error: any) {
    logger.error("Error loading product data:", error);
  }
};
