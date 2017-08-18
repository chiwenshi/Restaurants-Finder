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

    function SearchController($routeParams, $location, $timeout, UserService) {
        var vm = this;
        vm.uid = uid;

    }
})();