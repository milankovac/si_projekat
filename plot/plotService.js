const Plot = require('../plot/plotModel');
const mongoose = require('mongoose');
module.exports = class plotService {

    static async allPlotsByUser(id) {
      return await Plot.find({'userId': id})
      
    }

    static async getById(id){
        return Plot.findById(id)
    }

    static async deletePlot(id){
      const objetId = mongoose.Types.ObjectId(id.trim())
      return await Plot.deleteOne({_id:objetId})
  }
}

