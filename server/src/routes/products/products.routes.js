const express = require("express");
const { httpGetAllProducts } = require("./products.controller");

const productRouter = express.Router();

productRouter.get("/products", httpGetAllProducts);

module.exports = productRouter;
