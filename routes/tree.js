const { response } = require('express');
const express = require('express');
const TreeController = require('../tree/treeController');
const router = new express.Router();


// #Create tree
router.post('/tree', async (request, response) => {
    try {
        const tree = await TreeController.createTree(request.body)
        response.status(201).send(tree)
    } catch (e) {
        response.status(400).send(e)
    }
});


// #Find all trees by plot
router.get('/tree/plot/:id', async (request, response) => {
    try {
        const trees = await TreeController.getAllTreesByPlot(request.params.id)
        response.status(201).send(trees)
    } catch (e) {
        response.status(400).send(e)
    }
});


// #Find tree by id
router.get('/tree/:id', async (request, response) => {
    try {
        const tree = await TreeController.getTreeByID(request.params.id)
        response.status(201).send(tree)
    } catch (e) {
        response.status(400).send(e)
    }
});

module.exports = router;