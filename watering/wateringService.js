const Watering = require('../watering/wateringModel');
const mongoose = require('mongoose');
module.exports = class WateringService {

    async getById(id) {
        const watering = await Watering.findOne({id: id.trim()})
        return watering;
    }

    async getByPlotId(id) {
        const watering = await Watering.find({plotId: id.trim()})
        return watering;
    }

    async deleteWatering(id) {
        const objetId = mongoose.Types.ObjectId(id.trim())
        return await Watering.deleteOne({_id:objetId});
    }
}