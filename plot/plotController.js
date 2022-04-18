const plotFactory = require('./plotFactory');
const Plot = require('./plotModel');
const plotService = require('./plotService');
module.exports = class PlotController{
  
    // #Create new plot
    static async createPlot(body){
        const plot = plotFactory(body)
        await plot.save()
        return plot;
    }

    // #Get all by user id
    static async getAllPlotsByUserID(id){
      return await plotService.allPlotsByUser(id)
    }

    // #Get by plot id
    static async getPlotByID(id){
      return await plotService.getById(id)
    }
}