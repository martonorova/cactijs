// Frissiti a cserepet (atszinezi)

const requireOption = require('../generic/requireOption')

module.exports = function (objectRepository) {

    const PotModel = requireOption(objectRepository, 'PotModel');

    return function (req, res, next) {
        if (typeof req.body.color === 'undefined') {
            return next();
        }

        res.locals.pot.color = req.body.color;
        res.locals.pot.save(err => {
            if (err) {
                return next(err);
            }
            return res.redirect('/');
        })
    };
};