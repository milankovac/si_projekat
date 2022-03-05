const User = require('../user/userModel')

module.exports = function (data) {
    return new User
        (
            {
                firebaseId : data.firebaseId,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                password: data.password,
                image: data.image
            }
        );
}
