module.exports = function(mongoose, userModel) {
    var restaurantSchema = require('./restaurant.schema.server.js')(mongoose);
    var restaurantModel = mongoose.model('restaurantModel', restaurantSchema);

    var api = {
        'createRestaurantForUser' : createRestaurantForUser,
        'findAllRestaurants' : findAllRestaurants,
        'findAllRestaurantsForUser' : findAllRestaurantForUser,
        'findRestaurantById' : findRestaurantById,
        'updateRestaurant' : updateRestaurant,
        'addPageToRestaurant' : addPageToRestaurant,
        'removePageFromRestaurant' : removePageFromRestaurant,
        'deleteRestaurant' : deleteRestaurant
    };
    return api;

    function createRestaurantForUser(userId, restaurant) {
        restaurant._id = new Date().getTime().toString();
        restaurant._user = userId;
        return restaurantModel
            .create(restaurant)
            .then(function (restaurant) {
                return userModel
                    .addRestaurantForUser(userId, restaurant._id);
            });
    }

    function findAllRestaurants() {
        return restaurantModel.find();
    }

    function findAllRestaurantForUser(userId) {
        return restaurantModel
            .find({_user : userId})
            .populate('_user')
            .exec();
    }

    function findRestaurantById(restaurantId) {
        return restaurantModel.findOne({_id: restaurantId});
    }

    function updateRestaurant(restaurantId, restaurant) {
        return restaurantModel.update({
            _id : restaurantId
        }, {
            name : restaurant.name,
            description : restaurant.description
        });
    }

    function addPageToRestaurant(restaurantId, pageId) {
        return restaurantModel
            .findOne({_id: restaurantId})
            .then(
                function (restaurant) {
                    restaurant.pages.push(pageId);
                    return restaurant.save();
                });
    }

    function removePageFromRestaurant(restaurantId, pageId) {
        return restaurantModel
            .findOne({_id: restaurantId})
            .then(
                function (restaurant) {
                    restaurant.pages.pull(pageId);
                    restaurant.save();
                });
    }

    function deleteRestaurant(restaurantId) {
        return restaurantModel
            .findById(restaurantId)
            .then(function (restaurant) {
                var userId = restaurant._user;
                return userModel
                    .removeRestaurantFromUser(userId, restaurantId)
                    .then(function (user) {
                        return restaurantModel
                            .remove({_id: restaurantId});
                    });
            });
    }
};