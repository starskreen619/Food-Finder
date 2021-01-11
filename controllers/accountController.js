const { layout } = require("../utils");

const accountPage = (req, res) => {
  res.render("account", {
    ...layout,
  });
};

module.exports = {
  accountPage,
};
