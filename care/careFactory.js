const Care = require('../care/careModel')

module.exports = function (data) {
    return new Care
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
