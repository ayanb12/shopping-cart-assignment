const express = require("express");
const { httpLoginUser } = require("./login.controller");

const loginRouter = express.Router();

loginRouter.post("/login", httpLoginUser);

module.exports = loginRouter;
