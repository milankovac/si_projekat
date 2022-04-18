const { response } = require('express');
const express = require('express');
const UserController = require('../user/userController');
const router = new express.Router()

// #Add user
router.post('/user', async (request, response) => {
    try {
        const user = await UserController.addUser(request.body);
        response.status(201).send(user)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Get user by firebase ID
router.get('/user/:id', async (request, response) => {
    try {
        const user = await UserController.getUser(request.params.id)
        response.status(201).send(user)
    } catch (e) {
        response.status(400).send(e)
    }
});

// #Edit user
router.patch('/user/:id', async (request, response) => {
    try {
        const user = await UserController.editUser(request)
        response.status(201).send(user)
    } catch (e) {
        response.status(400).send(e)
    }

})

module.exports = router