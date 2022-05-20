const Supplementation = require('../supplementation/supplementationModel')

module.exports = function (data) {
    return new Supplementation
        (
            {
                userId : data.userId,
                plotId: data.plotId,
                date: data.date,
                type: data.type,
                comment: data.comment,
                amount: data.amount
            }
        );
}
