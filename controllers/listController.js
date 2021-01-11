const { layout } = require("../utils");

const list = (req, res) => {
  res.render("list", {
    ...layout,
  });
};

module.exports = {
  list,
};
