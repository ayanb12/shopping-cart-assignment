const express = require("express");
const { httpRegisterUser } = require("./register.controller");

const registerRouter = express.Router();

registerRouter.post("/register", httpRegisterUser);

module.exports = registerRouter;
