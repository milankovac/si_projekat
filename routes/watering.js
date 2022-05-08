const { response } = require('express');
const express = require('express');
const WateringController = require('../watering/wateringController');
const router = new express.Router()

// #Add watering
router.post('/watering', async (request, response) => {
    try {
        const watering = await WateringController.addWatering(request.body);
        response.status(201).send(watering)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Get watering by  ID
router.get('/watering/:id', async (request, response) => {
    try {
        const watering = await WateringController.getWateringById(request.params.id)
        response.status(201).send(watering)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Get watering by plot  ID
router.get('/watering/plot/:id', async (request, response) => {
    try {
        const watering = await WateringController.getWateringByPlot(request.params.id)
        response.status(201).send(watering)
    } catch (e) {
        response.status(400).send(e)
    }

})

module.exports = router