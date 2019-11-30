// Eltavolitja a bogarat a kaktuszrol

const requireOption = require('../generic/requireOption');

module.exports = function (objectRepository) {
    return function (req, res, next) {

        if (typeof (res.locals.cactus) === 'undefined') {
            return next();
        }

        res.locals.cactus.hasBug = false;
        res.locals.cactus.save(err => {
            if (err) {
                return next(err);
            }
            return res.redirect(`/cactus/${res.locals.cactus._id}`);
        });
        
    };
};