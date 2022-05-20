const Tillage = require('../tillage/tillageModel')
const mongoose = require('mongoose');
module.exports = class TillagegService {

    async getById(id) {
        const tillage = await Tillage.findOne({id: id.trim()})
        return tillage;
    }

    async getByPlotId(id) {
        const tillage = await Tillage.find({plotId: id.trim()})
        return tillage;
    }

    async deleteTillage(id) {
        const objetId = mongoose.Types.ObjectId(id.trim())
        return await Tillage.deleteOne({_id:objetId})
    }
}