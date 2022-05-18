const { response } = require('express');
const express = require('express');
const SupplementationController = require('../supplementation/supplementationController');
const router = new express.Router();


// #Create supplementation
router.post('/supplementation', async (request, response) => {
    try {
        const supplementation = await SupplementationController.addSupplementation(request.body)
        response.status(201).send(supplementation)
    } catch (e) {
        response.status(400).send(e)
    }
});


// #Find all supplementations by plot
router.get('/supplementation/plot/:id', async (request, response) => {
    try {
        const supplementations = await SupplementationController.getSupplementationByPlot(request.params.id)
        response.status(201).send(supplementations)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Find all supplementations by user
router.get('/supplementation/user/:id', async (request, response) => {
    try {
        const supplementations = await SupplementationController.getSupplementationByUser(request.params.id)
        response.status(201).send(supplementations)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Delete supplementation by id
router.delete('/supplementation/:id', async (request, response) => {
    try {
        const deleted = await SupplementationController.deleteSupplementation(request.params.id)
        response.status(201).send(deleted)
    } catch (e) {
        response.status(400).send(e)
    }
});


module.exports = router;