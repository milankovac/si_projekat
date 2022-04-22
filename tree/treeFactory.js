const Tree = require('../tree/treeModel')
module.exports = function (data) {
    return new Tree
        (
            {
                coordinates: data.coordinates,
                type: data.type,
                diseaseState: data.diseaseState,
                plotId: data.plotId
            }
        );
}