const {layout} = require('../utils')

const membersOnly = (req, res) => {
    console.log(req.session.user);
    const { username } = req.session.user;
    res.render('members-only', {
        locals: {
            username
        },
        ...layout
    })
};

module.exports = {
    membersOnly
};