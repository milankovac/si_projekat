const express = require('express')
const router = new express.Router()
const userFactory = require('../user/userFactory')
const UserService = require('../user/userService')


// router.post('/user/', (request, response) => {
//     const user = userFactory(request.body)
//     const body = request.body;
//     response.send(user)
// });

//Add user
router.post('/user/add', async (request, response) => {
    try {
        const user = userFactory(request.body)
        await user.save()
        response.status(201).send(user)
    } catch (e) {
        response.status(400).send(e)
    }
});

//Get user by firebase ID
router.get('/user/:id', async (request, response) => {
    const _id = request.params.id
    const userService = new UserService();
    try {
        const user = await userService.getById(_id)
        response.status(201).send(user)
    } catch (e) {
        response.status(400).send(e)
    }
});

module.exports = router