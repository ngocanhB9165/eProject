var app = angular.module("myApp", ["ngRoute"]);

app.controller("myCtrl", function ($scope, $http, $location) {

    $http.get("data.json").then((res) => {
        $scope.products = res.data.products;
    });
    
    $scope.submitSearch = function (search) {
        if (!search) {
            document.getElementById("fom").classList.add("form-control-err");
        } else {
            document.getElementById("fom").classList.remove("form-control-err");
            $scope.result = search;
            $location.path("/result");
            $scope.results = $scope.products.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase());
            });
            console.log($scope.results);
        }
    };
});

app.controller("languageCtrl", function ($scope, $http) {
    $http.get("data.json").then((res) => {
        $scope.products = res.data.products;
        
        $scope.lag = $scope.products.filter((item) => item.category_id === 1);
        $scope.self = $scope.products.filter((item) => item.category_id === 2);
        $scope.marketing = $scope.products.filter((item) => item.category_id === 3);
        $scope.healthy = $scope.products.filter((item) => item.category_id === 4);
        $scope.special = $scope.products.filter((item) => item.category_id === 5);
    });
});

app.controller(
    "registerController",
    function ($scope, $routeParams, $location, $http) {
        $scope.navigateLogin = () => {
            $location.path("/login");
        }
        $scope.match = function () {
            $scope.isMatch = angular.equals($scope.pass, $scope.PASS);
        };
        console.log($scope.isMatch);
        
        $scope.emails = {
            EMAIL_FORMAT:
                /^\w+([\.-]?\w+)*@(list.)?gmail.com+((\s*)+,(\s*)+\w+([\.-]?\w+)*@(list.)?gmail.com)*$/,
            EMAIL_FORMAT_HELP: "Email... Ex: example@example.com",
        };
        
        $scope.phones = {
            PHONE_FORMAT: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
            PHONE_FORMAT_HELP: "Phone... Ex: 0392689213",
        };

        $scope.register = function (name, phone, email, pass, PASS) {
        $scope.users = JSON.parse(localStorage.getItem("user") || "[]");
        $scope.data = {
            name,
            phone,
            email,
            pass,
            PASS,
        };

        if (
            !name ||
            !phone ||
            !email ||
            !pass ||
            !PASS ||
            angular.equals($scope.pass, $scope.PASS) == false
        ) {
            alert("Name, Phone Number, Email and Password must be provided");
        } else {
            $scope.users.push($scope.data);
            localStorage.setItem("user", JSON.stringify($scope.users));
            alert("Register Successfully");
            console.log($scope.users);
            $location.path("/login");
        }
        };
    }
);

app.controller("loginController", function ($scope, $location) {
    $scope.navigateRes = () => {
        $location.path("/register");
    }
    $scope.lgs = JSON.parse(localStorage.getItem("user") || "[]");

    $scope.phones = {
        PHONE_FORMAT: /(84|0[3|5|7|8|9])+([0-9]{8})\b/,
        PHONE_FORMAT_HELP: "Phone... Ex: 0392689213",
    };
    $scope.login = function (phone, pass) {
        $scope.lgs.map((item) => {
            $scope.lg = item;
        });
        if (
            $scope.lg.phone !== phone ||
            $scope.lg.pass !== pass ||
            !$scope.lg.phone ||
            !$scope.lg.pass
        ) {
            alert("Invalid ");
        } else {
            $location.path("/");
            alert("Login Successfully");
        }
    };
});

app.config([
    "$routeProvider",
    function ($routeProvider) {
        $routeProvider
        .when("/", {
            templateUrl: "views/home.html",
        })
        .when("/language", {
            templateUrl: "views/language.html",
        })
        .when("/marketing", {
            templateUrl: "views/marketing.html",
        })
        .when("/selfGrowth", {
            templateUrl: "views/self_growth.html",
        })
        .when("/specializedKnowledge", {
            templateUrl: "views/specialized_knowledge.html",
        })
        .when("/sportsHealth", {
            templateUrl: "views/sports_health.html",
        })
        .when("/result", {
            templateUrl: "views/result.html",
        })
        .when("/details/:id", {
            templateUrl: "views/details.html",
        })
        .when("/cart", {
            templateUrl: "views/cart.html",
        })
        .when("/login", {
            templateUrl: "views/login.html",
        })
        .when("/register", {
            templateUrl: "views/register.html",
        });
    },
]);
