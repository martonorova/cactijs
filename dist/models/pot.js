"use strict";
const Schema = require('mongoose').Schema;
const db = require('../config/db');
const Pot = db.model('Pot', {
    size: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    _cactus: {
        type: Schema.Types.ObjectId,
        ref: 'Cactus'
    }
});
module.exports = Pot;
