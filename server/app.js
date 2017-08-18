module.exports = function (app) {
    var models = require("./models/models.server.js")(app);
    require("./services/user.service.server.js")(app, models);
    require("./services/restaurant.service.server.js")(app, models);
};