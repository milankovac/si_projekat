const Plot = require('../plot/plotModel')
module.exports = class plotService {

    static async allPlotsByUser(id) {
      return await Plot.find({'userId': id})
      
    }

    static async getById(id){
        return Plot.findById(id)
    }
}

