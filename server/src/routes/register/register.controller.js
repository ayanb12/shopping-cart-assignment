const usersDB = {
  data: require("../../data/users/users.json"),
  setData: function (users) {
    this.data = users;
  },
};
const bcrypt = require("bcrypt");
const fs = require("fs").promises;
const path = require("path");

const httpRegisterUser = async (req, res) => {
  const { firstname, lastname, email, password, confirmPassword } = req.body;
  if (!firstname || !lastname || !email || !password || !confirmPassword)
    return res.status(400).json({ message: "Please provide valid details" });

  const alreadyUserPresent = usersDB.data.find((user) => user.email === email);
  if (alreadyUserPresent)
    return res.status(400).json({ message: "User already exist!" });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = { firstname, lastname, email, password: hashedPassword };

    usersDB.setData([...usersDB.data, newUser]);
    await fs.writeFile(
      path.join(__dirname, "..", "..", "data", "users", "users.json"),
      JSON.stringify(usersDB.data)
    );

    res.status(201).json({ message: "User successfully registered" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  httpRegisterUser,
};
