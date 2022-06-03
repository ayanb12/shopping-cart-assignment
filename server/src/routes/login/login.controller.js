const usersDB = {
  data: require("../../data/users/users.json"),
  setData: function (users) {
    this.data = users;
  },
};

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const fs = require("fs").promises;
const path = require("path");

const httpLoginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return res.status(400).json({ message: "Provide valid credentials" });
  const foundUser = usersDB.data.find((user) => user.email === email);

  if (!foundUser) return res.status(401).json({ message: "User not found" });

  const match = await bcrypt.compare(password, foundUser.password);

  if (match) {
    const accessToken = jwt.sign(
      {
        firstname: foundUser.firstname,
        lastname: foundUser.lastname,
        email: foundUser.email,
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "20s" }
    );

    const refreshToken = jwt.sign(
      {
        firstname: foundUser.firstname,
        lastname: foundUser.lastname,
        email: foundUser.email,
      },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    // Saving refresh token by creating a new user with the existing users in DB
    const existingUsers = usersDB.data.filter((user) => user.email !== email);
    const currentUser = { ...foundUser, refreshToken };

    usersDB.setData([...existingUsers, currentUser]);

    await fs.writeFile(
      path.join(__dirname, "..", "..", "data", "users", "users.json"),
      JSON.stringify(usersDB.data)
    );

    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.json({ accessToken });
  } else {
    res.sendStatus(401);
  }
};

module.exports = {
  httpLoginUser,
};
