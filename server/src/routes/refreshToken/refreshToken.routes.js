const express = require("express");
const { httpRefreshToken } = require("./refreshToken.controller");

const refreshTokenRouter = express.Router();

refreshTokenRouter.get("/refresh", httpRefreshToken);

module.exports = refreshTokenRouter;
