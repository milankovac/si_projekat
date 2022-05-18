const yieldFactory = require('../yield/yieldFactory')
const YieldService = require('../yield/yieldService')
module.exports = class YieldController {

    // #Add new yield
    static async addYield(body) {
        const yieldd = yieldFactory(body)
        await yieldd.save()
        return yieldd;
    }

    // #Get yield by plot id
    static async getYieldByPlot(id) {
        const yieldService = new YieldService();
        const yieldd = await yieldService.getByPlotId(id);
        return yieldd;
    }

    // #Get yield by id
    static async getById(id) {
        const yieldService = new YieldService();
        return await yieldService.getById(id);
    }

    // #Delete yield by id
    static async deleteYield(id) {
        const yieldService = new YieldService();
        return await yieldService.deleteYield(id);
    }
}