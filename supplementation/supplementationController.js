
const supplementationFactory = require('../supplementation/supplementationFactory')
const SupplementationService = require('../supplementation/supplementationService')
const Spplementation = require('./supplementationModel')

module.exports = class SupplementationController {

    // #Add new user
    static async addSupplementation(body) {
        const supplementation = supplementationFactory(body)
        await supplementation.save()
        return supplementation;
    }

    // #Get sumplemation by user  id
    static async getSupplementationByUser(id) {
        const supplementationService = new SupplementationService();
        const supplementation = await supplementationService.getByUserId(id);
        return supplementation;
    }

    // #Get sumplemation  by plot id
    static async getSupplementationByPlot(id) {
        const supplementationService = new SupplementationService();
        const supplementation = await supplementationService.getByPlotId(id);
        return supplementation;
    }

    // #Delete sumplemation  by  id
    static async deleteSupplementation(id) {
        const supplementationService = new SupplementationService();
        return await supplementationService.deleteSupplementation(id);

    }
}