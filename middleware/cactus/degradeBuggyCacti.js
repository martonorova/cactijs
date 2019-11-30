// vegigmegy a kaktuszokon es egy merettel csokkenti oket, ha bogarasak
// ha egy kaktusz small meretu, kitorli

const requireOption = require('../generic/requireOption');

module.exports = function (objectRepository) {

    const PotModel = requireOption(objectRepository, 'PotModel');
    const DayCounterModel = requireOption(objectRepository, 'DayCounterModel');

    return function (req, res, next) {
        if (typeof (res.locals.cacti) === 'undefined') {
            return next();
        }
        res.locals.cacti.forEach(cactus => {
            if (cactus.hasBug) {
                if (cactus.size === 'big') {
                    cactus.size = 'medium';
                    cactus.save(err => {
                        if (err) {
                            return next(err);
                        }
                    });
                } else if (cactus.size === 'medium') {
                    cactus.size = 'small';
                    cactus.save(err => {
                        if (err) {
                            return next(err);
                        }
                    });
                } else {
                    PotModel.findOne({_cactus: cactus._id}, (err, pot) => {
                        if (err) {
                            return next(err);
                        }
                        cactus.remove(cactusErr => {
                            if (cactusErr) {
                                return next(cactusErr);
                            }
                            pot._cactus = null;
                            pot.save(err => {
                                if (err) {
                                    return next(err);
                                }
                            });
                            DayCounterModel.findOne({}, (err, dayCounter) => {
                                if (err) {
                                    return next(err);
                                }
                                dayCounter.day = 0;
                                dayCounter.save(saveErr => {
                                    if (saveErr) {
                                        return next(saveErr);
                                    }
                                });
                            });
                        });
                    })
                }
            }
        });
        return next();
    }
}
