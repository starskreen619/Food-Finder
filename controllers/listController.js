const { memberLayout } = require("../utils");
const { List } = require('../models')

// const generateList = (req, res) => {
//   res.render("list", {
//     ...memberLayout,
//   });
// };

const generateList = async (req, res) => {
  const { id } = req.session.user;
  if (id) {
    const recipes = await List.findAll({
      where: {
        userId: id
      }
    });
    res.render('list', {
      locals: {
        recipes
      },
      ...memberLayout
    })
  } else {
    res.redirect('/')
  }
}

module.exports = {
  generateList
};
