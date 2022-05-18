const Care = require('../care/careModel')
const mongoose = require('mongoose');
module.exports = class CareService {

    async getById(id) {
        const care = await Care.findOne({ id: id })
        return care;
    }

    async getByPlotId(id) {
        const care = await Care.find({ plotId: id })
        return care;
    }

    async deleteCare(id) {
        const objetId = mongoose.Types.ObjectId(id.trim())
        return await Care.deleteOne({ _id: objetId })
    }

}