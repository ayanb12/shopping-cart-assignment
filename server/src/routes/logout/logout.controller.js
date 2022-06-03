const usersDB = {
  data: require("../../data/users/users.json"),
  setData: function (users) {
    this.data = users;
  },
};

const fs = require("fs").promises;
const path = require("path");

const httpLogoutUser = async (req, res) => {
  const cookies = req.cookies;
  if (!cookies.jwt) return res.sendStatus(204); //No content

  const refreshToken = cookies.jwt;

  const foundUser = usersDB.data.find(
    (user) => user.refreshToken === refreshToken
  );
  if (!foundUser) {
    res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
    return res.sendStatus(204);
  }

  const otherUsers = usersDB.data.filter(
    (user) => user.refreshToken !== refreshToken
  );
  const currentUser = { ...foundUser, refreshToken: "" };
  usersDB.setData([...otherUsers, currentUser]);

  await fs.writeFile(
    path.join(__dirname, "..", "..", "data", "users", "users.json"),
    JSON.stringify(usersDB.data)
  );

  res.clearCookie("jwt", { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 });
  res.status(200).json({ message: "logged out successfully" });
};

module.exports = {
  httpLogoutUser,
};
