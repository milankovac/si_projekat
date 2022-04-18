const Plot = require('../plot/plotModel')

module.exports = function (data) {
    return new Plot
        (
            {
                title: data.title,
                coordinates: data.coordinates,
                userId: data.userId
            }
        );
}
