const Tillage = require('../tillage/tillageModel')

module.exports = function (data) {
    return new Tillage
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
