const express = require("express");
const { httpAddToCart } = require("./addToCart.controller");

const addToCartRouter = express.Router();

addToCartRouter.post("/addToCart", httpAddToCart);

module.exports = addToCartRouter;
