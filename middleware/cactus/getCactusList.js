// megkeresi az osszes kaktuszt

const requireOption = require('../generic/requireOption');

module.exports = function (objectRepository) {
    const CactusModel = requireOption(objectRepository, 'CactusModel');

    return function (req, res, next) {
        CactusModel.find({}, (err, cacti) => {
            if (err) {
                return next(err);
            }
            res.locals.cacti = cacti;
            return next();
        })
    }
}