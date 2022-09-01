var app = angular.module('myApp', ["ngRoute"]);

app.controller("myCtrl", function($scope){

})

app.config([
    "$routeProvider", function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: "views/home.html"
            })
            .when('/language', {
                templateUrl: "views/language.html"
            })
            .when('/marketing', {
                templateUrl: "views/marketing.html"
            })
            .when('/selfGrowth', {
                templateUrl: "views/self_growth.html"
            })
            .when('/specializedKnowledge', {
                templateUrl: "views/specialized_knowledge.html"
            })
            .when('/sportsHealth', {
                templateUrl: "views/sports_health.html"
            })
            .when('/result', {
                templateUrl: "views/result.html"
            })
            .when('/details/:id', {
                templateUrl: "views/details.html"
            })
            .when('/cart', {
                templateUrl: "views/cart.html"
            })
            .when('/login', {
                templateUrl: "views/login.html"
            })
            .when('/register', {
                templateUrl: "views/register.html"
            })
    }
])