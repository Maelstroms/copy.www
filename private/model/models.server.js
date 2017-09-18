module.exports = function() {
    var mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/me');

    var userModel = require("./user/user.model.server")();
    var widgetModel= require("./widget/widget.model.server.js")();
    


    var model = {
        userModel: userModel,
        widgetModel:widgetModel
    };
    


    return model;
};