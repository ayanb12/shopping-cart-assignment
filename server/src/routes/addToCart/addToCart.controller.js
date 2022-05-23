const addToCart = require("../../data/addToCart/index.post.json");

const httpAddToCart = (req, res) => {
  console.log(req.body);
  return res.status(201).json(addToCart);
};

module.exports = {
  httpAddToCart,
};
