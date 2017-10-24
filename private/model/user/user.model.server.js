module.exports = function () {

    var mongoose = require("mongoose");
    var bcrypt = require('bcrypt');
    var UserSchema = require("./user.schema.server")();
    var User = mongoose.model("User", UserSchema);

    var api = {
        createUser: createUser,
        findUserByCredentials: findUserByCredentials,
        findUserByUsername: findUserByUsername,
        findUserById: findUserById,
        updateUser: updateUser,
        deleteUser: deleteUser
    };
    return api;

    function createUser(user) {
        return User.create(user);
    }

    function findUserById(userId) {
        return User.findById(userId);
    }

    function findUserByCredentials(username, password) {
        //return User.findOne({username: username, password: password});
        return User.findOne({ username: username })
            .exec(function (err, user) {
                if (err) {
                    return callback(err)
                } else if (!user) {
                    var err = new Error('User not found.');
                    err.status = 401;
                    return callback(err);
                }
                bcrypt.compare(password, user.password, function (err, result) {
                    if (result === true) {
                        return callback(null, user);
                    } else {
                        //TODO callback is undefined
                        return callback();
                    }
                })
            });
    }

    //TODO delete all findbyusername references or leverage it during registration to prevent duplicates
    function findUserByUsername() {

    }

    function updateUser(id, newUser) {
        return User.update(
            {_id: id},
            {
                $set: {
                    firstName: newUser.firstName,
                    lastName: newUser.lastName
                },
                $push: {
                    emails: newUser.email,
                    websites:newUser.websites
                }
            }
        );
    }
    
    

    function deleteUser(userId) {
        return User.remove({_id: userId});
    }
};