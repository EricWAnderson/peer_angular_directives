var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope) {
    $scope.hello = "Hello World";

    $scope.countTen = function () {
        $scope.newCounter = [];
        for (var i = 0; i <= 10; i++) {
            console.log(i);
            $scope.newCounter.push(i);
        }
    }
}]);