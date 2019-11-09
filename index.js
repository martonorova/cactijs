var express = require('express');
var app = express();


app.set('view engine', 'ejs');
// app.use(express.static('static'));

/**
 * Let's creat the .tpl and .error on the res object
 */
app.use(function (req, res, next) {
    res.tpl = {};
    res.tpl.error = [];
  
    return next();
  });

/**
 * Include routes
*/
require('./routes/routes')(app);

var server = app.listen(3000, function () {

});