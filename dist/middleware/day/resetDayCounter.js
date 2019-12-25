"use strict";
// Lenullazza a nap szamlalot
const requireOption = require('../generic/requireOption');
module.exports = function (objectRepository) {
    const DayCounterModel = requireOption(objectRepository, 'DayCounterModel');
    return function (req, res, next) {
        console.log(res.tpl.resetDayCounter);
        if (typeof (res.tpl.resetDayCounter) === 'undefined') {
            return next();
        }
        console.log(res.tpl.resetDayCounter);
        if (res.tpl.resetDayCounter) {
            DayCounterModel.findOne({}, (err, dayCounter) => {
                if (err) {
                    return next(err);
                }
                dayCounter.day = 0;
                dayCounter.save(saveErr => {
                    if (saveErr) {
                        return next(saveErr);
                    }
                    console.log('reset dayCOUNTER 000000');
                });
            });
            console.log('resetting resetDayCounter flag');
            res.tpl.resetDayCounter = false;
        }
        return next();
    };
};
