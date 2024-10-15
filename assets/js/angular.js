// Create a directive for the cart icon
var app = angular.module("myApp", ["ngRoute"]);

app.directive("cartIcon", function () {
  return {
    link: function (scope, element) {
      console.log("Cart icon clicked");
      element.on("click", function (event) {
        console.log("Cart icon clicked again");
        event.preventDefault();
        scope.showCart = true;
        scope.$apply();
      });
    },
  };
});

app.config(function ($routeProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "index copy.html",
      controller: "HomeController",
    })
    .when("/contact", {
      templateUrl: "contact.html",
    })
    .when("/about", {
      templateUrl: "about.html",
      controller: "AboutController",
    })
    .when("/signup", {
      templateUrl: "signup.html",
    })
    .when("/cart", {
      templateUrl: "cart.html",
    })
    .otherwise({
      redirectTo: "/",
    });
});

app.controller("HomeController", function ($scope) {
  $scope.message = "Welcome to the home page!";
});

app.controller("AboutController", function ($scope) {
  $scope.message = "Welcome to the about page!";
});

app.run(function ($rootScope, $location) {
  $rootScope.$on("$routeChangeStart", function (event, next, current) {
    console.log("Route changing to: ", next.templateUrl);
  });
});

var myApp = angular.module("myApp", []);
myApp.controller("CardController", function ($scope) {
  $scope.cartCount = 0;
  $scope.addToCart = function () {
    $scope.cartCount++;
  };
});
