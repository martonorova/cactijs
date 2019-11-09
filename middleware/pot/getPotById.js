// Betolti a cserepet, ha letezik

module.exports = function () {
    return function (req, res, next) {
        pots = [
            {
                "_id": 1,
                "size": 'small',
                "color": 'red',
                "cactus": null
            },
            {
                "_id": 2,
                "size": 'medium',
                "color": 'blue',
                "cactus": null
            },
            {
                "_id": 3,
                "size": 'big',
                "color": 'green',
                "cactus": 1
            },
        ];

        if (['1','2','3'].includes(req.params.potid)) {
            res.tpl.pot = pots[req.params.potid - 1];
            return next();
        }
        return res.redirect('/dashboard');
    };
};