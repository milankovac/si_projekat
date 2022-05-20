
const userFactory = require('../user/userFactory')
const UserService = require('../user/userService')
const User = require('./userModel')
const mongoose = require('mongoose');
module.exports = class UserController{

    // #Add new user
    static async addUser(body){
        const user = userFactory(body)
        await user.save()
        return user;
    }

    // #Get user by id
    static async getUser(id){
        const userService = new UserService();
        const user = await userService.getById(id);
        return user;
    }

    // #Edit user
    static async editUser(request){
        const body = request.body;
        const userService = new UserService();
        const user = await userService.getById(request.params.id);
        const objetId = mongoose.Types.ObjectId(user.id.trim())
        const updatedUser = {
            'firebaseId': user.firebaseId,
            'firstName': body.firstName ?? user.firstName,
            'lastName': body.lastName ?? user.lastName,
            'email': body.email ?? user.email,
            'image': body.image ?? user.image
        };
        await User.findByIdAndUpdate({_id:objetId}, updatedUser)
        return updatedUser
    }
}