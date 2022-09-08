var app = angular.module('myApp', ["ngRoute"]);

app.controller("myCtrl", function ($scope, $http) {
    $http.get("data.json").then((res) => {
        $scope.products = res.data.products;
    })
})


app.controller("languageCtrl", function ($scope, $http) {
    $http.get("data.json").then((res) => {
        $scope.products = res.data.products;
        $scope.lag = $scope.products.filter((item) => item.category_id === 1)
        $scope.self = $scope.products.filter((item) => item.category_id === 2)
        $scope.marketing = $scope.products.filter((item) => item.category_id === 3)
        $scope.healthy = $scope.products.filter((item) => item.category_id === 4)
        $scope.special = $scope.products.filter((item) => item.category_id === 5)
    })
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