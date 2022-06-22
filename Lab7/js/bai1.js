app = angular.module("lesson1", []);
app.controller('showdisplay', handling);

function handling($scope) {
    $scope.picture = '1.jpg'
    $scope.hoten = ' ';
    $scope.ngaysinh = ' ';
    $scope.gioitinh = ' ';
    $scope.diem = ' ';
}

function loadAllWeb() {
    location.reload();
}