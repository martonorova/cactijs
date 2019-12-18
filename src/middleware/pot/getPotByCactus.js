// kaktusz alapjan megkeresi a hozzatartozo cserepet

const requireOption = require('../generic/requireOption');

module.exports = function (objectRepository) {
    const PotModel = requireOption(objectRepository, 'PotModel');

    return function (req, res, next) {
        if (typeof(res.locals.cactus) === 'undefined') {
            return next();
        }

        PotModel.findOne({_cactus: res.locals.cactus._id}, (err, pot) => {
            if (err) {
                return next(err);
            }
            res.locals.pot = pot;
            return next();
        })
    }
}