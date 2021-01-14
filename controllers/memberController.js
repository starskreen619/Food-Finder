const {memberLayout} = require('../utils')
const {likes} = require('../models')
const {recipes} = require('../models')

const membersOnly = async (req, res) => {
    console.log(req.session.user);
    const { username } = req.session.user;
    const allRecipes = await recipes.findAll()

    res.render('members-only', {
        locals: {
            username,
            allRecipes
        },
        ...memberLayout
    })
};

const addLike = async (req, res) => {
    const { recipeid } = req.body;
    const { userid } = req.body;

    console.log(recipeid);
    console.log(userid)
    console.log(req.body)

    const newLike = await likes.create({
        recipe_id: recipeid,
        user_id: userid
    });
    // console.log(newLike)
    res.redirect('/members-only')
}

module.exports = {
    membersOnly,
    addLike
};