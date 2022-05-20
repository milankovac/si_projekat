const User = require('../user/userModel')
module.exports = class UserService {

    async getById(id) {
        const user = await User.findOne({firebaseId: id.trim()})
        return user;
    }
}

