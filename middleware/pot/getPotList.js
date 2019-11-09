// Betolti a cserepek listajat

module.exports = function () {
    return function (req, res, next) {
        console.log('Pot list');
        res.tpl.pots = [
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
        return next();
    };
};