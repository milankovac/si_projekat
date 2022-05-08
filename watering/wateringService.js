const Watering = require('../watering/wateringModel')
module.exports = class WateringService {

    async getById(id) {
        const watering = await Watering.findOne({id: id})
        return watering;
    }

    async getByPlotId(id) {
        const watering = await Watering.find({plotId: id})
        return watering;
    }
}