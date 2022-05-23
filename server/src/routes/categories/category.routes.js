const express = require("express");
const { httpGetAllCategories } = require("./category.controller");

const categoryRouter = express.Router();

categoryRouter.get("/categories", httpGetAllCategories);

module.exports = categoryRouter;
