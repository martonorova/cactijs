"use strict";
// Betolti a cserepek listajat
const requireOption = require('../generic/requireOption');
module.exports = function (objectRepository) {
    const PotModel = requireOption(objectRepository, 'PotModel');
    return function (req, res, next) {
        PotModel.find({}, (err, pots) => {
            if (err) {
                return next(err);
            }
            res.locals.pots = pots;
            return next();
        });
        // console.log('Pot list');
        // res.tpl.pots = [
        //     {
        //         "_id": 1,
        //         "size": 'small',
        //         "color": 'red',
        //         "cactus": null
        //     },
        //     {
        //         "_id": 2,
        //         "size": 'medium',
        //         "color": 'blue',
        //         "cactus": null
        //     },
        //     {
        //         "_id": 3,
        //         "size": 'big',
        //         "color": 'green',
        //         "cactus": 1
        //     },
        // ];
        // return next();
    };
};
