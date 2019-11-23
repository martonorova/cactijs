const getPotListMW = require('../middleware/pot/getPotList');
const getPotByIdMW = require('../middleware/pot/getPotById');
const getColorOptionsMW = require('../middleware/pot/getColorOptions');
const getSizeOptionsMW = require('../middleware/pot/getSizeOptions');
const deletePotMW = require('../middleware/pot/deletePot');
const createPotMW = require('../middleware/pot/createPot');

const getCactusMW = require('../middleware/cactus/getCactus');
const createCactusMW = require('../middleware/cactus/createCactus');
const getCactusTypesMW = require('../middleware/cactus/getCactusTypes');

const renderMW = require('../middleware/generic/render');
const mainRedirectMW = require('../middleware/generic/mainredirect');

const PotModel = require('../models/pot');
const CactusModel = require('../models/cactus');

module.exports = function (app) {

    const objRepo = {
        PotModel: PotModel,
        CactusModel: CactusModel
    };

    // atiranyit a '/dashboard'-ra
    app.get('/',
        mainRedirectMW()
    );

    // Fooldal, a cserepek listaja
    app.get('/dashboard',
        getPotListMW(objRepo),
        renderMW(objRepo, 'potlist')
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
        renderMW(objRepo, 'newpot')
    );

    // Letrehoz egy uj cserepet
    app.post('/pots/new', function(req, res, next) {
        console.log('Create new pot /pots/new POST');
        return next();
    },
        createPotMW(objRepo)
    );

    // Rendereli a cserep atfesto formot
    app.get('/pot/:potid/repaint',
        getPotByIdMW(),
        getColorOptionsMW(),
        renderMW(objRepo, 'repaint')
    );

    // Atfesti a cserepet
    app.post('/pot/:potid/repaint', function(req, res, next) {
        console.log('Repaint pot /pot/:potid/repaint POST');
        return next();
    });

    // Kitorli a cserepet
    app.get('/pot/:potid/delete',
        deletePotMW(objRepo)
    );

    // Rendereli az uj kaktusz formot
    app.get('/pot/:potid/plant',
        getCactusTypesMW(),
        renderMW(objRepo, 'newcactus')
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
        renderMW(objRepo, 'cactusinfo')
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