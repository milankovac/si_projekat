const Tillage = require('../tillage/tillageModel')
module.exports = class TillagegService {

    async getById(id) {
        const tillage = await Tillage.findOne({id: id})
        return tillage;
    }

    async getByPlotId(id) {
        const tillage = await Tillage.find({plotId: id})
        return tillage;
    }
}