(function(){
    var app = angular
        .module("WebAppMaker", ['ngRoute', 'ngSanitize', 'textAngular']);

    app.config(['$sceDelegateProvider', function($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist([
            'self',
            'https://www.youtube.com/**'
        ]);
    }]);
})();