// Letrehoz egy kaktuszt

const requireOption = require('../generic/requireOption');

module.exports = function (objectRepository) {

    const CactusModel = requireOption(objectRepository, 'CactusModel');

    return function (req, res, next) {
        if (typeof req.body.cactusType === 'undefined') {
            return next();
        }

        let cactus = new CactusModel();
        cactus = req.body.cactusType;
        cactus = 'small';
        
        res.locals.pot._cactus = cactus;

        res.locals.cactus.save(cactusErr => {
            if (cactusErr) {
                return next(cactusErr);
            }
            res.locals.pot.save(potErr => {
                if (potErr) {
                    return next(potErr);
                }
                return res.redirect('/');
            })
        })
    };
};