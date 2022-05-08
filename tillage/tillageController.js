const tillageFactory = require('../tillage/tillageFactory')
const TillageService = require('../tillage/tillageService')

module.exports = class TillageController {

    // #Add new  tillage
    static async addTillage(body) {
        const tillage = tillageFactory(body)
        await tillage.save()
        return tillage;
    }

    // #Get tillage by   id
    static async getTillageById(id) {
        const tillageService = new TillageService();
        const tillage = await tillageService.getById(id);
        return tillage;
    }

    // #Get tillage by plot  id
    static async getTillageByPlot(id) {
        const tillageService = new TillageService();
        const tillage = await tillageService.getByPlotId(id);
        return tillage;
    }
}