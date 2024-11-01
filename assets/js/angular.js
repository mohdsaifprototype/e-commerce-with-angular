// Create a directive for the cart icon
var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider) {
  $routeProvider
    .when("/contact", {
      templateUrl: "contact.html",
    })
    .when("/about", {
      templateUrl: "about.html",
    })
    .when("/sp", {
      templateUrl: "signup.html",
    })
    .when("/cart", {
      templateUrl: "cart.html",
    })
    .when("/billing", {
      templateUrl: "billing.html",
    })
    .when("/userLogin", {
      templateUrl: "account.html",
    })
    .otherwise({
      redirectTo: "/home", // Redirect to home by default
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
  // Initialize the visibility of homeItems

  $scope.isHomeVisible = true; // Show homeItems by default

  // Function to check if the current route is the home route

  $scope.checkHomeVisibility = function () {
    $scope.isHomeVisible = $location.path() === "/home";
  };

  // Watch for changes in the route

  $scope.$on("$routeChangeSuccess", function () {
    $scope.checkHomeVisibility();
  });
});
