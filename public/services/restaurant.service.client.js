(function () {
    angular
        .module("WebAppMaker")
        .factory("RestaurantService", restaurantService);

    function restaurantService($http) {
        var services = {
            "createRestaurant": createRestaurant,
            "findRestaurantsByUser": findRestaurantsByUser,
            "findRestaurantById": findRestaurantById,
            "updateRestaurant": updateRestaurant,
            "deleteRestaurant": deleteRestaurant,
            "deleteRestaurantsByUser": deleteRestaurantsByUser
        };
        return services;

        function createRestaurant(userId, restaurant) {
            var url = "/api/user/"+userId+"/restaurant";
            return $http.post(url, restaurant);
        }

        function findRestaurantsByUser(userId) {
            var url = "/api/user/"+ userId +"/Restaurant";
            return $http.get(url);
        }

        function findRestaurantById(restaurantId) {
            var url = "/api/restaurant/"+ restaurantId;
            return $http.get(url);
        }

        function updateRestaurant(restaurantId, restaurant) {
            var url = "/api/restaurant/"+ restaurantId;
            return $http.put(url, restaurant);
        }

        function deleteRestaurant(restaurantId) {
            var url = "/api/restaurant/" + restaurantId;
            return $http.delete(url);
        }

        function deleteRestaurantsByUser(userId) {
            var url = "/api/user/" + userId + "/restaurant";
            return $http.delete(url);
        }
    }
})();