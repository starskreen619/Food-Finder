const { layout } = require("../utils");

const generateList = (req, res) => {
  res.render("list", {
    ...layout,
  });
};

module.exports = {
  generateList
};
