// megkapja a kaktusz listat, veletlenszeruen tesz a kaktuszokra bogarat

const requireOption = require('../generic/requireOption');

module.exports = function (objectRepository) {

    return function (req, res, next) {
        
        if (typeof(res.locals.cacti) === 'undefined') {
            return next();
        }
        res.locals.cacti.forEach(cactus => {
            if (Math.random() < 0.5) {
                cactus.hasBug = true;
                cactus.save(err => {
                    if (err) {
                        return next(err);
                    }
                })
            }
        })
        return next();
    }
}