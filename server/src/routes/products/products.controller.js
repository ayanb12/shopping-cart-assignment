const products = require("../../data/products/index.get.json");

const httpGetAllProducts = (req, res) => {
  return res.status(200).json(products);
};

module.exports = {
  httpGetAllProducts,
};
