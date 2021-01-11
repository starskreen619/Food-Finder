const { layout } = require("../utils");

const account = (req, res) => {
  res.render("account", {
    ...layout,
  });
};

module.exports = {
  account,
};
