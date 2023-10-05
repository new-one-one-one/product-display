import { saveProductData } from "./controllers/productController";

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { loadProductsData } = require("./controllers/productController");
const { productRouter } = require("./routes/productRoutes");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8000;

loadProductsData();

app.get("/", (req: any, res: any) => {
  res.send("Hello from exoress");
});

app.use("/api", productRouter);

app.listen(port, (err: any) => {
  if (err) {
    console.log(err);
  }
  console.log("Server running on port");
});
