const careFactory = require('../care/careFactory')
const CareService = require('../care/careService')

module.exports = class CareController {

    // #Add new user
    static async addCare(body) {
        const care = careFactory(body)
        await care.save()
        return care;
    }

    // #Get care by   id
    static async getCareById(id) {
        const careService = new CareService();
        const care = await careService.getById(id);
        return care;
    }

    // #Get care by plot  id
    static async getCareByPlot(id) {
        const careService = new CareService();
        const care = await careService.getByPlotId(id);
        return care;
    }

    // #Delete care by   id
    static async deleteCare(id) {
        const careService = new CareService();
        return await careService.deleteCare(id);;
    }
}