// card-controller.js
angular.module("myApp", []).controller("CardController", [
  "$scope",
  function ($scope) {
    $scope.todaysCards = [
      {
        image: "assets/img/g92-2-500x500 1.png",
        title: "HAVIT HV-G92 Gamepad",
        price: 260,
        mrpPrice: 160,
        discount: "-40%",
        ratings: [1, 1, 1, 1, 0.5],
        reviews: 88,
      },
      {
        image: "assets/img/ak-900-01-500x500 1.png",
        title: "AK-900 Wired Keyboard",
        price: 960,
        mrpPrice: 1160,
        discount: "-35%",
        ratings: [1, 1, 1, 1, 0.5],
        reviews: 88,
      },
      {
        image: "assets/img/monitor.png",
        title: "IPS LCD Gaming Monitor",
        price: 370,
        mrpPrice: 400,
        discount: "-30%",
        ratings: [1, 1, 1, 1, 0.5],
        reviews: 88,
      },
      {
        image: "assets/img/chair.png",
        title: "S-Series Comfort Chair",
        price: 325,
        mrpPrice: 400,
        discount: "-25%",
        ratings: [1, 1, 1, 1, 0.5],
        reviews: 88,
      },
    ];

    $scope.thisMonthCards = [
      {
        image: "assets/img/north coat.png",
        title: "The north coat",
        price: 260,
        ratings: [1, 1, 1, 1, 1],
        reviews: 60,
      },
      {
        image: "assets/img/Gucci-Savoy-medium-duffle-bag.png",
        title: "Gucci duffle bag",
        price: 960,
        ratings: [1, 1, 1, 1, 1],
        reviews: 60,
      },
      {
        image: "assets/img/gammaxx-rgb.png",
        title: "RGB liquid CPU Cooler",
        price: 160,
        ratings: [1, 1, 1, 1, 1],
        reviews: 60,
      },
      {
        image: "assets/img/book shelf.png",
        title: "Small BookSelf",
        price: 360,
        ratings: [1, 1, 1, 1, 1],
        reviews: 60,
      },
    ];

    $scope.ourProductsCards = [
      {
        image: "assets/img/Frame 604.png",
        title: "Breed Dry Dog Food",
        price: 100,
        ratings: [1, 1, 1, 1, 1],
        reviews: 60,
      },
      {
        image: "assets/img/camera.png",
        title: "CANON EOS DSLR Camera",
        price: 160,
        ratings: [1, 1, 1, 1, 1],
        reviews: 60,
      },
      {
        image: "assets/img/laptop.png",
        title: "ASUS FHD Gaming Laptop",
        price: 700,
        ratings: [1, 1, 1, 1, 1],
        reviews: 60,
      },
      {
        image: "assets/img/curology.png",
        title: "Curology Product Set",
        price: 500,
        ratings: [1, 1, 1, 1, 1],
        reviews: 65,
      },
      {
        image: "assets/img/Car Kids.png",
        title: "Kids Electric Car",
        price: 960,
        new: true,
        ratings: [1, 1, 1, 1, 1],
        reviews: 70,
      },
      {
        image: "assets/img/shoes.png",
        title: "Jr. Zoom Soccer Cleats",
        price: 1160,
        ratings: [1, 1, 1, 1, 1],
        reviews: 80,
      },
      {
        image: "assets/img/gamepad black.png",
        title: "GP11 Shooter USB Gamepad",
        price: 660,
        new: true,
        ratings: [1, 1, 1, 1, 1],
        reviews: 60,
      },
      {
        image: "assets/img/jacket.png",
        title: "Quilted Satin Jacket",
        price: 660,
        ratings: [1, 1, 1, 1, 0.5],
        ratings: [1, 1, 1, 1, 1],
        reviews: 60,
      },
    ];
  },
]);

angular.module('myApp').controller('SectionController', ['$scope', function($scope) {
  $scope.sections = [
    {
      title: "Today's",
      subtitle: "Flash Sales",
      cards: $scope.todaysCards
    },
    {
      title: "Categories",
      subtitle: "Browse By Category",
      cards: []
    },
    {
      title: "This Month",
      subtitle: "Best Selling Products",
      cards: $scope.thisMonthCards
    },
    {
      title: "Ours Products",
      subtitle: "Explore Our Products",
      cards: $scope.ourProductsCards
    },
    {
      title: "Featured",
      subtitle: "New Arrival",
      cards: []
    }
  ];
}]);

angular.module('myApp').controller('CartController', ['$scope', function($scope) {
  $scope.cartCount = 0;

  $scope.addToCart = function() {
    $scope.cartCount++;
  };
}]);