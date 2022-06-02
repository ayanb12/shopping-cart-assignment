const express = require("express");
const { httpLogoutUser } = require("./logout.controller");

const logoutRouter = express.Router();

logoutRouter.get("/logout", httpLogoutUser);

module.exports = logoutRouter;
