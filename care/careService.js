const Care = require('../care/careModel')
module.exports = class CareService {

    async getById(id) {
        const care = await Care.findOne({id: id})
        return care;
    }

    async getByPlotId(id) {
        const care = await Care.find({plotId: id})
        return care;
    }
}