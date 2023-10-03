const express = require("express");
const { loadProductsData } = require("./controllers/productController");
const { productRouter } = require("./routes/productRoutes");
/* eslint-disable  @typescript-eslint/no-explicit-any */

const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello from exoress");
});

// Load product data
loadProductsData();

console.log(process.cwd());
app.use("/api", productRouter);

app.listen(port, (err: any) => {
  if (err) {
    console.log(err);
  }
  console.log("Server running on port");
});
