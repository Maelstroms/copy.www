module.exports = function () {

  var mongoose = require("mongoose");
  var bcrypt = require('bcrypt-nodejs');
  var UserSchema = require("./user.schema.server")();
  var User = mongoose.model("User", UserSchema);

  var api = {
    createUser: createUser,
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

  // function findUserByCredentials(username) {
  //     //return User.findOne({username: username, password: password});
  //     return User.findOne({ username: username })
  //         .exec(function (err, user) {
  //             if (err) {
  //                 return callback(err)
  //             } else if (!user) {
  //                 var err = new Error('User not found.');
  //                 err.status = 401;
  //                 return callback(err);
  //             }
  //             bcrypt.compare(password, user.password, function (err, result) {
  //                 if (result === true) {
  //                     return callback(null, user);
  //                 } else {
  //                     //TODO callback is undefined
  //                     return callback();
  //                 }
  //             })
  //         });
  // }


  //so I guess this doesn't fly anymore, we just gotta rely on searching a username and then
  //using bcrypt to compare
  function findUserByCredentials(username) {
    //return User.findOne({username: username, password: password});
    console.log("find user by credentials is deprecated");
  }
//not returning any values, try to make a case that returns username?
  //console.log(User.findOne({username: username}));

  function findUserByUsername(username) {
    return User.findOne({username: username})
      .exec(function (err, user) {
        if (err) {
          return callback(err);
        } else if (!user) {
          var err = new Error('User not found.');
          err.status = 401;
          return callback(err);
        }
        else{
          return user;
        }
      });
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
          websites: newUser.websites
        }
      }
    );
  }


  function deleteUser(userId) {
    return User.remove({_id: userId});
  }
};
