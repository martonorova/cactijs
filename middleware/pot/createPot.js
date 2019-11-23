// Letrehoz egy uj cserepet

const requireOption = require('../generic/requireOption');

module.exports = function (objectRepository) {
    const PotModel = requireOption(objectRepository, 'PotModel');

    return function (req, res, next) {
        console.log('createPot')
        console.log(req.body.size);
        console.log(req.body.color);

        if (
            typeof req.body.size === 'undefined' ||
            typeof req.body.color === 'undefined'
        ) {
            console.log("UNDEF")
            return next();
        }

        // create new pot
        res.locals.pot = new PotModel();

        res.locals.pot.size = req.body.size;
        res.locals.pot.color = req.body.color;
        res.locals.pot._cactus = null;

        res.locals.pot.save(err => {
            if (err) {
                return next(err);
            }
            console.log('saved');
            PotModel.find({}, function (err, pots) {
                if (err) {
                    console.log(err);
                }   
                console.log(pots);
            })

            return res.redirect('/');
        })
    };
};