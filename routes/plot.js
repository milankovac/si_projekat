const { response } = require('express');
const express = require('express');
const PlotController = require('../plot/plotController');
const router = new express.Router()

// #Create plot
router.post('/plot', async (request, response) => {
    try {
        const plot = await PlotController.createPlot(request.body)
        response.status(201).send(plot)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Find all plots by user
router.get('/plot/user/:id', async (request, response) => {
    try {
        const plots = await PlotController.getAllPlotsByUserID(request.params.id)
        response.status(201).send(plots)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Find plot by id
router.get('/plot/:id', async (request, response) => {
    try {
        const plot = await PlotController.getPlotByID(request.params.id)
        response.status(201).send(plot)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Delete plot by id
router.delete('/plot/:id', async (request, response) => {
    try {
        const deleted = await PlotController.deletePlot(request.params.id)
        response.status(201).send(deleted)
    } catch (e) {
        response.status(400).send(e)
    }
});

module.exports = router;