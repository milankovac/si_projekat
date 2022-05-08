const mongose = require('mongoose');

const Yield = mongose.model('Yield', {
    userId: {
        type: String,
        required: true
    },
    plotId: {
        type: String,
        required: true
    },
    date: {
        type: String
    },
    amount: {
        type: String,
    },
    income: {
        type: String
    },
    expense: {
        type: String
    }
});
module.exports = Yield;