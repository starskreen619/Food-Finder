const { layout } = require("../utils");

const listController = (req, res) => {
  res.render("list", {
    ...layout,
  });
};

module.exports = {
  listController,
};
