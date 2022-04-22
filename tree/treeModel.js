const mongose = require('mongoose')

const Tree = mongose.model('Tree', {
    coordinates: {
        type: String
    },
    type: {
        type: String
    },
    diseaseState: {
        type: String
    },
    plotId: {
        type: String,
        required: true
    }

});
module.exports = Tree;