module.exports = function() {
    var mongoose = require('mongoose');
    // TODO get rid of connect and replace with non deprecated code
    mongoose.connect('mongodb://localhost/me');

    var userModel = require("./user/user.model.server")();
    var widgetModel= require("./widget/widget.model.server.js")();
    


    var model = {
        userModel: userModel,
        widgetModel:widgetModel
    };
    


    return model;
};