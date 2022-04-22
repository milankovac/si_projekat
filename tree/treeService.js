const Tree = require('../tree/treeModel');

module.exports = class treeService {

    static async allTreesByPlot(id) {
        return await Tree.find({ 'plotId': id })
    }

    static async getTreeByID(id){
        return await Tree.findById(id)
    }
}