const { response } = require('express');
const express = require('express');
const YieldController = require('../yield/yieldController');
const router = new express.Router()

// #Create yield
router.post('/yield', async (request, response) => {
    try {
        const yield = await YieldController.addYield(request.body)
        response.status(201).send(yield)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Find all yields by plot
router.get('/yield/plot/:id', async (request, response) => {
    try {
        const yields = await YieldController.getYieldByPlot(request.params.id)
        response.status(201).send(yields)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Find yield by id
router.get('/yield/:id', async (request, response) => {
    try {
        const yieldd = await YieldController.getById(request.params.id)
        response.status(201).send(yieldd)
    } catch (e) {
        response.status(400).send(e)
    }
});


module.exports = router;