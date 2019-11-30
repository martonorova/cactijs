const getPotListMW = require('../middleware/pot/getPotList');
const getPotByIdMW = require('../middleware/pot/getPotById');
const getPotByCactusMW = require('../middleware/pot/getPotByCactus');
const getColorOptionsMW = require('../middleware/pot/getColorOptions');
const getSizeOptionsMW = require('../middleware/pot/getSizeOptions');
const deletePotMW = require('../middleware/pot/deletePot');
const createPotMW = require('../middleware/pot/createPot');
const repaintPotMW = require('../middleware/pot/repaintPot');

const getCactusMW = require('../middleware/cactus/getCactus');
const getCactusListMW = require('../middleware/cactus/getCactusList');
const createCactusMW = require('../middleware/cactus/createCactus');
const getCactusTypesMW = require('../middleware/cactus/getCactusTypes');
const cactusGrowMW = require('../middleware/cactus/cactusGrow');
const degradeBuggyCactiMW = require('../middleware/cactus/degradeBuggyCacti');

const incrementDayCounterMW = require('../middleware/day/incrementDayCounter');
const getDayCounterMW = require('../middleware/day/getDayCounter');

const renderMW = require('../middleware/generic/render');
const mainRedirectMW = require('../middleware/generic/mainredirect');

const PotModel = require('../models/pot');
const CactusModel = require('../models/cactus');
const DayCounterModel = require('../models/dayCounter');

module.exports = function (app) {

    const objRepo = {
        PotModel: PotModel,
        CactusModel: CactusModel,
        DayCounterModel: DayCounterModel
    };

    // atiranyit a '/dashboard'-ra
    app.get('/',
        mainRedirectMW()
    );

    // Fooldal, a cserepek listaja
    app.get('/dashboard',
        getPotListMW(objRepo),
        getDayCounterMW(objRepo),
        renderMW(objRepo, 'potlist')
    );

    // Lepteti a nap szamlalot
    app.get('/dashboard/nextday',
        getCactusListMW(objRepo),
        degradeBuggyCactiMW(objRepo),
        incrementDayCounterMW(objRepo),
        mainRedirectMW()
    );

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
        getPotByIdMW(objRepo),
        getColorOptionsMW(),
        renderMW(objRepo, 'repaint')
    );

    // Atfesti a cserepet
    app.post('/pot/:potid/repaint',
        getPotByIdMW(objRepo),
        repaintPotMW(objRepo)
    );

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
    app.post('/pot/:potid/plant',
        getPotByIdMW(objRepo),
        createCactusMW(objRepo)
    );

    // Rendereli a kaktusz info oldalt
    app.get('/cactus/:cactusid',
        getCactusMW(objRepo),
        renderMW(objRepo, 'cactusinfo')
    );

    // Kaktusz ontozes
    app.get('/cactus/:cactusid/water',
        getCactusMW(objRepo),
        getPotByCactusMW(objRepo),
        cactusGrowMW(objRepo),
        renderMW(objRepo, 'cactusinfo')
    );

    // Bogar eltavolitasa a kaktuszrol
    app.post('/cactus/:cactusid/killbug', function(req, res, next) {
        console.log('Kill bug on cactus /cactus/:cactusid/killbug POST');
        return next();
    });
}