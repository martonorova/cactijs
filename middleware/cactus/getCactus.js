// Betolti a kaktuszt, ha letezik

module.exports = function () {
    return function (req, res, next) {
        console.log('Get cactus by id');

        console.log('CactusID: ' + req.params.cactusid);

        res.tpl.cactus = {
            "size": 'baby',
            "type": 'haworthia'
        }

        return next();
    };
};