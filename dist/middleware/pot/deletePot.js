"use strict";
// Kitorol egy cserepet, ha nincs benne kaktusz
const requireOption = require('../generic/requireOption');
module.exports = function (objectRepository) {
    const PotModel = requireOption(objectRepository, 'PotModel');
    return function (req, res, next) {
        PotModel.findOne({ _id: req.params.potid }, (err, pot) => {
            if (err || !pot) {
                return next(err);
            }
            if (pot._cactus !== null) {
                return next('Pot has a cactus in it, cannot delete it');
            }
            pot.remove(error => {
                if (error) {
                    return next(error);
                }
            });
            return res.redirect('/');
        });
    };
};
