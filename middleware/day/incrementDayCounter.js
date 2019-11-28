// Lepteti a nap szamlalot

const requireOption = require('../generic/requireOption');

module.exports = function (objectRepository) {

    const DayCounterModel = requireOption(objectRepository, 'DayCounterModel');

    return function (req, res, next) {
        DayCounterModel.findOne({}, (err, dayCounter) => {

            if (err) {
                return next(err);
            }

            if (!dayCounter) {
                return next('No dayCounter');
            }
        
            dayCounter.day = dayCounter.day + 1;
            console.log(dayCounter);
            dayCounter.save(saveErr => {
                if (saveErr) {
                    console.log('Failed to increment dayCounter.');
                    return next(saveErr);
                }
                res.locals.dayCounter = dayCounter.day;
                return next();
            })
        });
    };
};