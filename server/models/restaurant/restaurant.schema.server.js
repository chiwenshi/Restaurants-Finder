module.exports = function (mongoose) {
    // var pageSchema = require("../page/page.schema.server.js")(mongoose);
    var Schema = mongoose.Schema;

    var restaurantSchema = new Schema({
        _id: String,
        _user : {type : String, ref : 'userModel'},
        name : {type : String, required : true},
        formatted_address : String,
        rating: Number,
        dateCreated : {
            type : Date,
            default: Date.now
        }
    }, {collection : 'restaurant'});

    return restaurantSchema;
};