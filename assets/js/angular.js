// Create a directive for the cart icon
var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/home", {
      templateUrl: "index.html",
    })
    .when("/contact", {
      templateUrl: "contact.html",
    })
    .when("/about", {
      templateUrl: "about.html",
    })
    .when("/signup", {
      templateUrl: "signup.html",
    })
    .when("/cart", {
      templateUrl: "cart.html",
    })
    .otherwise({
      redirectTo: "/index.html",
    });
});

app.directive("cartIcon", function () {
  return {
    link: function (scope, element) {
      // Initialize showCart on the scope
      scope.showCart = false;

      // Function to handle cart icon click
      function handleClick(event) {
        event.preventDefault();
        scope.showCart = !scope.showCart; // Toggle the cart visibility
        scope.$apply(); // Apply changes to the scope
      }

      // Attach the event listener to the element
      element.on("click", handleClick);

      // Unbind the event listener when the scope is destroyed
      scope.$on("$destroy", function () {
        element.off("click", handleClick);
      });
    },
  };
});

app.controller("MainController", function ($scope, $location) {
  // Function to check if the current route is the home route

  $scope.isHomeVisible = function () {
    return $location.path() === "/home";
  };

  // Watch for changes in the route

  $scope.$on("$routeChangeSuccess", function () {
    $scope.isHomeVisible = $scope.isHomeVisible();
  });
});


