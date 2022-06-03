const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bannersRouter = require("./src/routes/banners/banners.routes");
const categoryRouter = require("./src/routes/categories/category.routes");
const productRouter = require("./src/routes/products/products.routes");
const addToCartRouter = require("./src/routes/addToCart/addToCart.routes");
const registerRouter = require("./src/routes/register/register.routes");
const loginRouter = require("./src/routes/login/login.routes");
const refreshTokenRouter = require("./src/routes/refreshToken/refreshToken.routes");
const logoutRouter = require("./src/routes/logout/logout.routes");
const verifyJWT = require("./src/middlewares/verifyJWT");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.json());

app.use(cookieParser());

app.use("/static/images", express.static(path.join(__dirname, "assets")));

app.use("/", bannersRouter);
app.use("/", categoryRouter);
app.use("/", addToCartRouter);
app.use("/", registerRouter);
app.use("/", loginRouter);
app.use("/", refreshTokenRouter);
app.use("/", logoutRouter);

app.use(verifyJWT);
app.use("/", productRouter);

module.exports = app;
