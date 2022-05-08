const mongose = require('mongoose')

const Watering = mongose.model('Watering', {
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
module.exports = Watering;