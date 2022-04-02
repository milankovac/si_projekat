
const userFactory = require('../user/userFactory')
const UserService = require('../user/userService')
const User = require('./userModel')

module.exports = class UserController{

    static async addUser(body){
        const user = userFactory(body)
        await user.save()
        return user;
    }

    static async getUser(id){
        const userService = new UserService();
        const user = await userService.getById(id);
        return user;
    }

    static async editUser(request){
        const body = request.body;
        const userService = new UserService();
        const user = await userService.getById(request.params.id);
        const updatedUser = {
            'firebaseId': user.firebaseId,
            'firstName': body.firstName ?? user.firstName,
            'lastName': body.lastName ?? user.lastName,
            'email': body.email ?? user.email,
            'image': body.image ?? user.image
        };
        await User.updateOne({firebaseId:request.params.id}, updatedUser)
        return updatedUser
    }
}