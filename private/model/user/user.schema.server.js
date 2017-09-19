module.exports = function() {
    var mongoose = require("mongoose");
    var bcrypt = require('bcrypt');

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        emails: [String],
        phone: [String],
        admin: Boolean
    }, {collection: "site.user"});

    //hashing a password before saving it to the database
    UserSchema.pre('save', function (next) {
        var user = this;
        bcrypt.hash(user.password, 10, function (err, hash){
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        })
    });

    return UserSchema
};