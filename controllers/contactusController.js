const { layout } = require("../utils");

const contactusPage = (req, res) => {
  res.render("contactus", {
    ...layout,
  });
};

module.exports = {
  contactusPage,
};
