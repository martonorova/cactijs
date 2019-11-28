const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Let's creat the .tpl and .error on the res object
 * Initiate day-counter
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

app.use((err, req, res, next) => {
  res.end('Problem...');
  console.log(err);
});

var server = app.listen(3000, function () {
  console.log('Started on port 3000');
});