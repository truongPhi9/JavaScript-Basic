app = angular.module('myApp', []);
app.controller('display', handling);

function handling($scope) {
    $scope.calculate = function() {
        var height = parseFloat($scope.height);
        var width = parseFloat($scope.width);

        $scope.perimeter = (height + width) * 2;
        $scope.acreage = (height * width);
    }
}