"use strict";
// Atiranyitja a felhasznalot a '/dashboard'-ra, ha meghivja a '/' endpoint-ot
module.exports = function () {
    return function (req, res, next) {
        return res.redirect('/dashboard');
    };
};
