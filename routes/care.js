const { response } = require('express');
const express = require('express');
const CareController = require('../care/careController');
const router = new express.Router()

// #Add user
router.post('/care', async (request, response) => {
    try {
        const care = await CareController.addCare(request.body);
        response.status(201).send(care)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Get care by  ID
router.get('/care/:id', async (request, response) => {
    try {
        const care = await CareController.getCareById(request.params.id)
        response.status(201).send(care)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Get care by plot  ID
router.get('/care/plot/:id', async (request, response) => {
    try {
        const care = await CareController.getCareByPlot(request.params.id)
        response.status(201).send(care)
    } catch (e) {
        response.status(400).send(e)
    }

})

module.exports = router