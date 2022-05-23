const path = require("path");
const express = require("express");
const cors = require("cors");
const bannersRouter = require("./src/routes/banners/banners.routes");
const categoryRouter = require("./src/routes/categories/category.routes");
const productRouter = require("./src/routes/products/products.routes");
const addToCartRouter = require("./src/routes/addToCart/addToCart.routes");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use("/static", express.static(path.join(__dirname, "assets")));

app.use("/", bannersRouter);
app.use("/", categoryRouter);
app.use("/", productRouter);
app.use("/", addToCartRouter);

module.exports = app;
