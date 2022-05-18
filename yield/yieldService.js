const Yield = require('../yield/yieldModel')
const mongoose = require('mongoose');
module.exports = class YieldService {

    async getByPlotId(id) {
        const yields = await Yield.find({plotId: id})
        return yields;
    }

    async getById(id){
        const yieldd = await Yield.findOne({id: id});
        return yieldd;
    }

    async deleteYield(id){
        const objetId = mongoose.Types.ObjectId(id.trim());
        return await Yield.deleteOne({_id:objetId})
    }

}
