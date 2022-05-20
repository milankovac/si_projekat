const Yield = require('../yield/yieldModel')

module.exports = function (data) {
    return new Yield
        (
            {
                userId: data.userId,
                plotId: data.plotId,
                date: data.date,
                amount: data.amount,
                income: data.income,
                expense: data.expense,
                comment: data.comment
            }
        );
}
