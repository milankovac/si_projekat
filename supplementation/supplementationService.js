const Supplementation = require('../supplementation/supplementationModel')
const mongoose = require('mongoose');
module.exports = class SupplementationService {

    async getByUserId(id) {
        const supplementation = await Supplementation.findOne({userId: id.trim()})
        return supplementation;
    }

    async getByPlotId(id) {
        const supplementation = await Supplementation.find({plotId: id.trim()})
        return supplementation;
    }

    async deleteSupplementation(id) {
        const objetId = mongoose.Types.ObjectId(id.trim())
        return await Supplementation.deleteOne({_id:objetId})

    }
}
