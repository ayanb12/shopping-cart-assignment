const express = require("express");
const { httpGetAllBanners } = require("./banners.controller");

const bannersRouter = express.Router();

bannersRouter.get("/banners", httpGetAllBanners);

module.exports = bannersRouter;
