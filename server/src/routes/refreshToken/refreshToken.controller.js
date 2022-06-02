const usersDB = {
  data: require("../../data/users/users.json"),
  setData: function (users) {
    this.data = users;
  },
};

const jwt = require("jsonwebtoken");
require("dotenv").config();

const httpRefreshToken = (req, res) => {
  const cookies = req.cookies;
  if (!cookies.jwt)
    return res.status(401).json({ message: "cookies not found" });

  const refreshToken = cookies.jwt;

  const foundUser = usersDB.data.find(
    (user) => user.refreshToken === refreshToken
  );

  if (!foundUser) return res.sendStatus(403); //Forbidden

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err) return res.sendStatus(403);

    const accessToken = jwt.sign(
      {
        firstname: decoded.firstname,
        lastname: decoded.lastname,
        email: decoded.email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "20s" }
    );

    res.json({ accessToken });
  });
};

module.exports = {
  httpRefreshToken,
};
