(function() {
    angular
        .module("WebAppMaker")
        .controller("RestaurantController", RestaurantController)
        .controller("SearchController", SearchController);

    function RestaurantController($routeParams, $timeout, $location, RestaurantService) {
        var vm = this;
        vm.deleteRestaurant = deleteRestaurant;
        vm.uid = $routeParams.uid;

        findRestaurantsByUser(vm.uid);

        function findRestaurantsByUser(uid) {
            RestaurantService.findRestaurantsByUser(uid)
                .then(function (response) {
                    vm.restaurants = response.data;
                }, function (error) {
                    console.log(error);
                });
        }
        
        function deleteRestaurant(rid, name) {
            RestaurantService.deleteRestaurant(rid)
                .then(function (response) {
                    vm.deleted = "restaurant [" + name + "] was deleted";
                    $timeout(function () {
                        vm.deleted = null;
                    }, 3000);
                    findRestaurantsByUser(vm.uid);
                })
        }
    }

    function SearchController($routeParams, $location, $timeout, RestaurantService) {
        var vm = this;
        vm.saveRestaurant = saveRestaurant;
        vm.uid = $routeParams.uid;
        vm.text = $routeParams.text;
        vm.location = $routeParams.location;
        vm.radius = $routeParams.radius;

        RestaurantService.textSearch(vm.text, vm.location, vm.radius)
            .then(function (response) {
                vm.restaurants = response.data.results;
                console.log(vm.restaurants);
            });

        function saveRestaurant(id) {
            for(var i = 0; i < vm.restaurants.length; i++) {
                if (vm.restaurants[i].id === id) {
                    var newRestaurant = {
                        _id: vm.restaurants[i].place_id,
                        name: vm.restaurants[i].name,
                        formatted_address: vm.restaurants[i].formatted_address,
                        rating: vm.restaurants[i].rating
                    };
                    RestaurantService.createRestaurant(vm.uid, newRestaurant)
                        .then(function (response) {
                            console.log(response);
                        });
                    return
                }
            }
        }
    }
})();