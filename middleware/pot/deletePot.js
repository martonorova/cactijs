// Kitorol egy cserepet, ha nincs benne kaktusz

module.exports = function () {
    return function (req, res, next) {
        res.redirect('/');
    };
};