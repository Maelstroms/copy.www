module.exports = function() {
    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        emails: [String],
        phone: [String],
        admin: Boolean
    }, {collection: "site.user"});

    return UserSchema
};