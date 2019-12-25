"use strict";
const Schema = require('mongoose').Schema;
const db = require('../config/db');
const DayCounter = db.model('DayCounter', {
    day: {
        type: Number,
        required: true
    }
});
module.exports = DayCounter;
