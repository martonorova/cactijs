"use strict";
// Visszaadja a lehetseges cserep mereteket
const requireOption = require('../generic/requireOption');
module.exports = function (objectRepository) {
    // get the daycounter from db, or create one if it does not exist
    const DayCounterModel = requireOption(objectRepository, 'DayCounterModel');
    return function (req, res, next) {
        DayCounterModel.find({}, (err, dayCounters) => {
            // console.log(dayCounters);
            let dayCounter;
            if (!dayCounters.length) {
                dayCounter = new DayCounterModel();
                dayCounter.day = 1;
                dayCounter.save(err => {
                    if (err) {
                        console.log('Failed to initialize dayCounter.');
                        return next(err);
                    }
                });
            }
            else {
                dayCounter = dayCounters[0];
            }
            res.locals.dayCounter = dayCounter.day;
            return next();
        });
    };
};
