const banners = require("../../data/banners/index.get.json");

const httpGetAllBanners = (req, res) => {
  return res.status(200).json(banners);
};

module.exports = {
  httpGetAllBanners,
};
