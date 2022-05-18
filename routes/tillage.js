const { response } = require('express');
const express = require('express');
const TillageController = require('../tillage/tillageController');
const router = new express.Router()

// #Add tillage
router.post('/tillage', async (request, response) => {
    try {
        const tillage = await TillageController.addTillage(request.body);
        response.status(201).send(tillage)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Get tillage by  ID
router.get('/tillage/:id', async (request, response) => {
    try {
        const tillage = await TillageController.getTillageById(request.params.id)
        response.status(201).send(tillage)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Get tillage by plot  ID
router.get('/tillage/plot/:id', async (request, response) => {
    try {
        const tillage = await TillageController.getTillageByPlot(request.params.id)
        response.status(201).send(tillage)
    } catch (e) {
        response.status(400).send(e)
    }

})

// #Delete tillage byID
router.delete('/tillage/:id', async (request, response) => {
    try {
        const deleted = await TillageController.deleteTillage(request.params.id)
        response.status(201).send(deleted)
    } catch (e) {
        response.status(400).send(e)
    }

})

module.exports = router