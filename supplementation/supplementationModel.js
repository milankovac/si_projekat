const mongose = require('mongoose')
const Supplementation = mongose.model('Supplementation', {
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
    type: {
        type: String,
    },
    comment: {
        type: String
    },
    amount: {
        type: String
    },
});
module.exports = Supplementation;