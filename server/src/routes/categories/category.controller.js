const categories = require("../../data/categories/index.get.json");

const httpGetAllCategories = (req, res) => {
  return res.status(200).json(categories);
};

module.exports = {
  httpGetAllCategories,
};
