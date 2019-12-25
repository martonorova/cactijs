"use strict";
// Betolti a kaktuszt, ha letezik
const requireOption = require('../generic/requireOption');
module.exports = function (objectRepository) {
    const CactusModel = requireOption(objectRepository, 'CactusModel');
    return function (req, res, next) {
        CactusModel.findOne({ _id: req.params.cactusid }, (err, cactus) => {
            if (err || !cactus) {
                return next(err);
            }
            res.locals.cactus = cactus;
            return next();
        });
    };
};
