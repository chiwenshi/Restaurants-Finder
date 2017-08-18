(function() {
    angular
        .module("WebAppMaker")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when('/register', {
                templateUrl : "views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when('/login', {
                templateUrl : "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when('/user/:uid', {
                templateUrl : "views/user/profile.view.client.html",
                controller: "ProfileController",
                controllerAs: "model"
            })
            .when('/user/:uid/home', {
                templateUrl : "views/user/home.view.client.html",
                controller: "HomeController",
                controllerAs: "model"
            })
            .when('/user/:uid/admin', {
                templateUrl : "views/user/admin.view.client.html",
                controller: "AdminController",
                controllerAs: "model"
            })

            // .when('/user/:uid/website', {
            //     templateUrl : "views/website/website-list.view.client.html",
            //     controller: "WebsiteListController",
            //     controllerAs: "models"
            // })
            // .when('/user/:uid/website/new', {
            //     templateUrl : "views/website/website-new.view.client.html",
            //     controller: "NewWebsiteController",
            //     controllerAs: "models"
            // })
            // .when('/user/:uid/website/:wid', {
            //     templateUrl : "views/website/website-edit.view.client.html",
            //     controller: "EditWebsiteController",
            //     controllerAs: "models"
            // })
            // .when('/user/:uid/website/:wid/page', {
            //     templateUrl : "views/page/page-list.view.client.html",
            //     controller: "PageListController",
            //     controllerAs: "models"
            // })
            // .when('/user/:uid/website/:wid/page/new', {
            //     templateUrl : "views/page/page-new.view.client.html",
            //     controller: "NewPageController",
            //     controllerAs: "models"
            // })
            // .when('/user/:uid/website/:wid/page/:pid', {
            //     templateUrl : "views/page/page-edit.view.client.html",
            //     controller: "EditPageController",
            //     controllerAs: "models"
            // })
            // .when('/user/:uid/website/:wid/page/:pid/widget', {
            //     templateUrl : "views/widget/widget-list.view.client.html",
            //     controller: "WidgetListController",
            //     controllerAs: "models"
            // })
            // .when('/user/:uid/website/:wid/page/:pid/widget/new', {
            //     templateUrl : "views/widget/widget-chooser.view.client.html",
            //     controller: "NewWidgetController",
            //     controllerAs: "models"
            // })
            // .when('/user/:uid/website/:wid/page/:pid/widget/create/:wtype', {
            //     templateUrl : "views/widget/widget-new.view.client.html",
            //     controller: "CreateWidgetController",
            //     controllerAs: "models"
            // })
            // .when('/user/:uid/website/:wid/page/:pid/widget/:wgid', {
            //     templateUrl : "views/widget/widget-edit.view.client.html",
            //     controller: "EditWidgetController",
            //     controllerAs: "models"
            // })
            // .otherwise({
            //     redirectTo : "/"
            // });
    }
})();