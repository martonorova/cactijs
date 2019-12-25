"use strict";
// Kap egy kaktuszt, es megnoveli a meretet, ha belefer a cserepbe
const requireOption = require('../generic/requireOption');
module.exports = function (objectRepository) {
    const sizeCodes = {
        'small': 0,
        'medium': 1,
        'big': 2
    };
    return function (req, res, next) {
        if (typeof (res.locals.cactus) === 'undefined' ||
            typeof (res.locals.pot) === 'undefined') {
            return next();
        }
        const potSizeCode = sizeCodes[res.locals.pot.size];
        const cactusSizeCode = sizeCodes[res.locals.cactus.size];
        if (potSizeCode > cactusSizeCode) {
            if (res.locals.cactus.size === 'small') {
                res.locals.cactus.size = 'medium';
            }
            else if (res.locals.cactus.size === 'medium') {
                res.locals.cactus.size = 'big';
            }
            res.locals.cactus.save(err => {
                if (err) {
                    return next(err);
                }
                console.log("Cactus has grown");
                return next();
            });
            return next();
        }
    };
};
