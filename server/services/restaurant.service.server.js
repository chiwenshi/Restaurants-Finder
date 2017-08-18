module.exports = function(app, models){
    var model = models.restaurantModel;

    //POST Calls
    app.post('/api/user/:userId/restaurant',createRestaurant);

    //GET Calls
    app.get('/api/user/:userId/restaurant',findRestaurantsByUser);

    app.get('/api/restaurant/:restaurantId',findRestaurantById);

    //PUT Calls
    app.put('/api/restaurant/:restaurantId',updateRestaurant);

    //DELETE Calls
    app.delete('/api/restaurant/:restaurantId',deleteRestaurant);

    /*API calls implementation*/
    function createRestaurant(req, res) {
        var userId = req.params.userId;
        var restaurant = req.body;

        model
            .createRestaurantForUser(userId, restaurant)
            .then(function (user) {
                res.json(user);
            }, function (error) {
                console.log(error);
            });
    }

    function findRestaurantsByUser(req, res) {
        var userId = req.params.userId;
        model
            .findAllRestaurantsForUser(userId)
            .then(function (restaurants) {
                res.send(restaurants);
            }, function (error) {
                console.log(error);
                res.sendStatus(404).send(error);
            });
    }

    function findRestaurantById(req, res) {
        var restaurantId = req.params.restaurantId;
        model
            .findRestaurantById(restaurantId)
            .then(function (restaurant) {
                res.send(restaurant);
            }, function (error) {
                res.sendStatus(404).send(error);
            });
    }

    function updateRestaurant(req, res) {
        var restaurantId = req.params.restaurantId;
        var restaurant = req.body;

        model
            .updateRestaurant(restaurantId, restaurant)
            .then(function (restaurant) {
                res.send(restaurant);
            }, function (error) {
                res.sendStatus(404).send(error);
            })
    }

    function deleteRestaurant(req, res) {
        var restaurantId = req.params.restaurantId;
        if(restaurantId){
            model
                .deleteRestaurant(restaurantId)
                .then(function (status){
                        res.sendStatus(200).send(status);
                    }, function (error){
                        res.sendStatus(400).send(error);}
                );
        } else{
            // Precondition Failed. Precondition is that the user exists.
            res.sendStatus(412);
        }
    }
};