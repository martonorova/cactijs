"use strict";
// Letrehoz egy kaktuszt
const requireOption = require('../generic/requireOption');
module.exports = function (objectRepository) {
    const CactusModel = requireOption(objectRepository, 'CactusModel');
    return function (req, res, next) {
        if (typeof req.body.cactusType === 'undefined') {
            return next();
        }
        const cactus = new CactusModel();
        cactus.type = req.body.cactusType;
        cactus.size = 'small';
        cactus.hasBug = false;
        res.locals.pot._cactus = cactus;
        cactus.save(cactusErr => {
            if (cactusErr) {
                return next(cactusErr);
            }
            res.locals.pot.save(potErr => {
                if (potErr) {
                    return next(potErr);
                }
                return res.redirect('/');
            });
        });
    };
};
