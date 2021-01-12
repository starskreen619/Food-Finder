const { memberLayout } = require("../utils");

const generateList = (req, res) => {
  res.render("list", {
    ...memberLayout,
  });
};

module.exports = {
  generateList
};
