const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Cactus = db.model('Cactus', {
    size: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});

module.exports = Cactus;