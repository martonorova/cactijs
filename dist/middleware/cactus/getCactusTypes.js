"use strict";
// Visszaadja a lehetseges kaktuszfajtakat
module.exports = function () {
    return function (req, res, next) {
        res.tpl.cactusTypes = [
            'barrel',
            'fairy castle',
            'saguaro',
            'star',
            'feather',
            'haworthia'
        ];
        return next();
    };
};
