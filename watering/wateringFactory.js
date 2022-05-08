const Watering = require('../watering/wateringModel')

module.exports = function (data) {
    return new Watering
        (
            {
                userId : data.userId,
                plotId: data.plotId,
                date: data.date,
                quantity: data.quantity,
                type: data.type,
                comment: data.comment
            }
        );
}
