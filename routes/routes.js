module.exports = function (app) {

    // atiranyit a '/dashboard'-ra
    app.get('/', function(req, res, next) {
        console.log('home / GET');
    });

    // Fooldal, a cserepek listaja
    app.get('/dashboard', function(req, res, next) {
        console.log('Dashboard /dashboard GET' );
    });

    // Lepteti a nap szamlalot
    app.post('/dashboard/nextday', function(req, res, next) {
        console.log('Increment day /dashboard/nextday POST');
    });

    // Rendereli a cserep hozzaadasa formot
    app.get('/pots/new', function(req, res, next) {
        console.log('New pot form /pots/new GET');
    });

    // Letrehoz egy uj cserepet
    app.post('/pots/new', function(req, res, next) {
        console.log('Create new pot /pots/new POST');
    });

    // Rendereli a cserep atfesto formot
    app.get('/pot/:potid/repaint', function(req, res, next) {
        console.log('Repaint pot form /pot/:potid/repaint GET');
    });

    // Atfesti a cserepet
    app.post('/pot/:potid/repaint', function(req, res, next) {
        console.log('Repaint pot /pot/:potid/repaint POST');
    });

    // Kitorli a cserepet
    app.delete('/pot/:potid/delete', function(req, res, next) {
        console.log('Delete pot /pot/:potid/delete DELETE');
    });

    // Rendereli az uj kaktusz formot
    app.get('/pot/:potid/plant', function(req, res, next) {
        console.log('Plant cactus form /pot/:potid/plant GET');
    });

    // Letrehoz egy uj kaktuszt
    app.post('/pot/:potid/plant', function(req, res, next) {
        console.log('Plant cactus /pot/:potid/plant POST');
    });

    // Rendereli a kaktusz info oldalt
    app.get('/cactus/:cactusid/info', function(req, res, next) {
        console.log('Cactus info page /cactus/:cactusid/info GET');
    });

    // Kaktusz ontozes
    app.post('/cactus/:cactusid/water', function(req, res, next) {
        console.log('Water cactus /cactus/:cactusid/water POST');
    });

    // Bogar eltavolitasa a kaktuszrol
    app.post('/cactus/:cactusid/killbug', function(req, res, next) {
        console.log('Kill bug on cactus /cactus/:cactusid/killbug POST');
    });
}