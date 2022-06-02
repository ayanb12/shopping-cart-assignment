const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Please login to access" });
  }

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ message: "Token expired" });

    req.user = {
      firstname: decoded.firstname,
      lastname: decoded.lastname,
      email: decoded.email,
    };

    next();
  });
};

module.exports = verifyJWT;
