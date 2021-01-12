const {memberLayout} = require('../utils')

const membersOnly = (req, res) => {
    console.log(req.session.user);
    const { username } = req.session.user;
    res.render('members-only', {
        locals: {
            username
        },
        ...memberLayout
    })
};

module.exports = {
    membersOnly
};