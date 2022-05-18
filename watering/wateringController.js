const wateringFactory = require('../watering/wateringFactory')
const WateringService = require('../watering/wateringService')

module.exports = class WateringController {

    // #Add new  watering
    static async addWatering(body) {
        const watering = wateringFactory(body)
        await watering.save()
        return watering;
    }

    // #Get watering by   id
    static async getWateringById(id) {
        const wateringService = new WateringService();
        const watering = await wateringService.getById(id);
        return watering;
    }

    // #Get watering by plot  id
    static async getWateringByPlot(id) {
        const wateringService = new WateringService();
        const watering = await wateringService.getByPlotId(id);
        return watering;
    }

    // #Delete watering by plot  id
    static async deleteWatering(id) {
        const wateringService = new WateringService();
        return await wateringService.deleteWatering(id);
    }

}