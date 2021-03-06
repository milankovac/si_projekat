const treeFactory = require("./treeFactory");
const treeService = require("./treeService");

module.exports = class TreeController {

    // #Crete new tree
    static async createTree(body) {
        const tree = treeFactory(body)
        await tree.save()
        return tree;
    }

    // #Get all trees on the plot
    static async getAllTreesByPlot(id) {
        return await treeService.allTreesByPlot(id)
    }

    // #Get tree by ID
    static async getTreeByID(id) {
        return await treeService.getTreeByID(id)
    }

    // #Delete tree by ID
    static async deleteTree(id) {
        return await treeService.deleteTree(id)
    }
}