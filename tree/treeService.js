const Tree = require('../tree/treeModel');
const mongoose = require('mongoose');
module.exports = class treeService {

    static async allTreesByPlot(id) {
        return await Tree.find({ 'plotId': id })
    }

    static async getTreeByID(id){
        return await Tree.findById(id)
    }

    static async deleteTree(id){
        const objetId = mongoose.Types.ObjectId(id.trim())
        return await Tree.deleteOne({_id:objetId})
    }
}