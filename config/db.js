const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/iiq7n6',
    { useNewUrlParser: true, useUnifiedTopology: true });

module.exports = mongoose;