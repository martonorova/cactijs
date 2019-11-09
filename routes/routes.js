var getPotListMW = require('../middleware/pot/getPotList');
var getPotByIdMW = require('../middleware/pot/getPotById');
var getColorOptionsMW = require('../middleware/pot/getColorOptions');
var getSizeOptionsMW = require('../middleware/pot/getSizeOptions');
var deletePotMW = require('../middleware/pot/deletePot');

var getCactusMW = require('../middleware/cactus/getCactus');
var createCactusMW = require('../middleware/cactus/createCactus');
var getCactusTypesMW = require('../middleware/cactus/getCactusTypes');

var renderMW = require('../middleware/generic/render');
var mainRedirectMW = require('../middleware/generic/mainredirect');

module.exports = function (app) {

    // atiranyit a '/dashboard'-ra
    app.get('/',
        mainRedirectMW()
    );

    // Fooldal, a cserepek listaja
    app.get('/dashboard',
        getPotListMW(),
        renderMW('potlist')
    );

    // Lepteti a nap szamlalot
    app.post('/dashboard/nextday', function(req, res, next) {
        console.log('Increment day /dashboard/nextday POST');
        return next();
    });

    // Rendereli a cserep hozzaadasa formot
    app.get('/pots/new',
        getSizeOptionsMW(),
        getColorOptionsMW(),
        renderMW('newpot')
    );

    // Letrehoz egy uj cserepet
    app.post('/pots/new', function(req, res, next) {
        console.log('Create new pot /pots/new POST');
        return next();
    });

    // Rendereli a cserep atfesto formot
    app.get('/pot/:potid/repaint',
        getPotByIdMW(),
        getColorOptionsMW(),
        renderMW('repaint')
    );

    // Atfesti a cserepet
    app.post('/pot/:potid/repaint', function(req, res, next) {
        console.log('Repaint pot /pot/:potid/repaint POST');
        return next();
    });

    // Kitorli a cserepet
    app.get('/pot/:potid/delete',
        deletePotMW()
    );

    // Rendereli az uj kaktusz formot
    app.get('/pot/:potid/plant',
        getCactusTypesMW(),
        renderMW('newcactus')
    );

    // Letrehoz egy uj kaktuszt
    app.post('/pot/:potid/plant', function(req, res, next) {
        console.log('Plant cactus /pot/:potid/plant POST');
        return next();
    });

    // Rendereli a kaktusz info oldalt
    app.get('/cactus/:cactusid',
        // get cactus from pot id
        getCactusMW(),
        renderMW('cactusinfo')
    );

    // Kaktusz ontozes
    app.post('/cactus/:cactusid/water', function(req, res, next) {
        console.log('Water cactus /cactus/:cactusid/water POST');
        return next();
    });

    // Bogar eltavolitasa a kaktuszrol
    app.post('/cactus/:cactusid/killbug', function(req, res, next) {
        console.log('Kill bug on cactus /cactus/:cactusid/killbug POST');
        return next();
    });
}