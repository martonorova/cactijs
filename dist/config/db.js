"use strict";
const mongoose = require('mongoose');
mongoose.connect('mongodb://mongo:27017/cactijs', { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = mongoose;
