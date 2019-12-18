// Betolti a cserepet, ha letezik
const requireOption = require('../generic/requireOption');

module.exports = function (objectRepository) {

    const PotModel = requireOption(objectRepository, 'PotModel');

    return function (req, res, next) {

        PotModel.findOne({_id: req.params.potid }, (err, pot) => {
            if (err || !pot) {
                return next(err);
            }

            res.locals.pot = pot;
            return next();
        });
    };
};