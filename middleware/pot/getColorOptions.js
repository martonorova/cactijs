// visszaadja a szinvalasztekot

module.exports = function () {
    return function (req, res, next) {
        res.tpl.colorOptions = [
            'red',
            'green',
            'blue'
        ];
        return next();
    };
};