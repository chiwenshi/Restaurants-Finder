module.exports = function (app) {
    var connectionString = 'mongodb://127.0.0.1:27017/webproj'; // for local
    if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
        var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
        var password = process.env.MLAB_PASSWORD_WEBDEV;
        connectionString = 'mongodb://' + username + ':' + password;
        connectionString += '@ds149373.mlab.com:49373/heroku_v167hg7v'; // user yours
    }
    var mongoose = require("mongoose");
    mongoose.connect(connectionString);

    var userModel = require("./user/user.model.server.js")(mongoose);
    var restaurantModel = require("./restaurant/restaurant.model.server.js")(mongoose, userModel);
    // var pageModel =  require("./page/page.models.server.js")(mongoose, websiteModel);
    // var widgetModel = require("./widget/widget.models.server.js")(mongoose, pageModel);

    var models = {
        'userModel' : userModel,
        'restaurantModel' : restaurantModel
        // 'pageModel' : pageModel,
        // 'widgetModel' : widgetModel
    };

    return models;
};