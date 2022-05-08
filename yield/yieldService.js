const Yield = require('../yield/yieldModel')
module.exports = class YieldService {

    async getByPlotId(id) {
        const yields = await Yield.find({plotId: id})
        return yields;
    }

    async getById(id){
        const yieldd = await Yield.findOne({id: id});
        return yieldd;
    }

}
