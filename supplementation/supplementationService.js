const Supplementation = require('../supplementation/supplementationModel')
module.exports = class SupplementationService {

    async getByUserId(id) {
        const supplementation = await Supplementation.findOne({userId: id})
        return supplementation;
    }

    async getByPlotId(id) {
        const supplementation = await Supplementation.findOne({plotId: id})
        return supplementation;
    }
}
