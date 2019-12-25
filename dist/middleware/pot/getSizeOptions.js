"use strict";
// Visszaadja a lehetseges cserep mereteket
module.exports = function () {
    return function (req, res, next) {
        res.tpl.sizeOptions = [
            'small',
            'medium',
            'big'
        ];
        return next();
    };
};
