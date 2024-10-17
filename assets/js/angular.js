// Create a directive for the cart icon
var app = angular.module("myApp", ["ngRoute"]);

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
      redirectTo: "/",
    });
});

// Controllers
app.controller("HomeController", function ($scope) {
  $scope.message = "Welcome to the home page!";
});

app.controller("AboutController", function ($scope) {
  $scope.message = "Welcome to the about page!";
});

app.run(function ($rootScope) {
  $rootScope.$on("$routeChangeStart", function (event, next) {
    console.log("Route changing to: ", next.templateUrl);
  });
});

/* var myApp = angular.module("myApp", []);
myApp.controller("CardController", function ($scope) {
  $scope.cartCount = 0;
  $scope.addToCart = function () {
    $scope.cartCount++;
  };
});
 */
