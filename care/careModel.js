const mongose = require('mongoose')

const Care = mongose.model('Care', {
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
    quantity: {
        type: String
    },
    type: {
        type: String,
    },
    comment: {
        type: String
    }
});
module.exports = Care;