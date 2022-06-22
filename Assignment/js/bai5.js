app = angular.module('myApp', []);
app.controller('display', system);

function system($scope) {
    // kiem tra ma sinh vien
    document.getElementById('codeStudent').style.border = '1px solid red';
    $scope.changeCodeStudent = function() {
        if($scope.codeStu != null) {   
            document.getElementById('codeStudent').style.border = '';
        }else {
            document.getElementById('codeStudent').style.border = '1px solid red';
        }
    }

    // kiem tra ten sinh vien
    document.getElementById('nameStudent').style.border = '1px solid red';
    $scope.changeNameStudent = function() {
        if($scope.nameStu != null) {   
            document.getElementById('nameStudent').style.border = '';
        }else {
            document.getElementById('nameStudent').style.border = '1px solid red';
        }
    }

    // kiem tra email
    document.getElementById('email').style.border = '1px solid red';
    $scope.changeEmail = function() {

        if($scope.emailFormat != null) {   
            document.getElementById('email').style.border = '';
        }else {
            document.getElementById('show-noti').style.display = '';
            document.getElementById('email').style.border = '1px solid red';
        }

        // quy uoc dinh dang cho email
        let emailFormat = /^[a-zA-Z]+\d{0,9}@[a-z]+[.]{1,1}[a-z]+[.]{0,1}[a-z]{0,}/.test($scope.emailFormat);
        
        // an hien thong bao kiem tra dinh dang email
        if(emailFormat == true) {
            document.getElementById('email').style.border = '';
            document.getElementById('show-noti').style.display = 'none';
        }else {
            document.getElementById('show-noti').style.display = 'block';
            document.getElementById('email').style.border = '1px solid red';
        }

        /// an lai thong bao kiem tra dinh dang email neu trong tag input email khong ghi gi
        if($scope.emailFormat == null) {
            document.getElementById('show-noti').style.display = 'none';
        }
    }

    // kiem tra gioi tinh
    document.getElementById('gender').style.border = '1px solid red';

    $scope.changeGender = function() {
        console.log($scope.gender);
        if($scope.gender == '1' || $scope.gender == '2') {
            document.getElementById('gender').style.border = '';
        }
    }

    // kiem tra so thich
    document.getElementById('favorite-1').style.border = '1px solid red';
    $scope.changeFavorite = function() {
        console.log($scope.favorite1 || $scope.favorite2 || $scope.favorite3 || $scope.favorite4 || $scope.favorite5);
        if(($scope.favorite1 || $scope.favorite2 || $scope.favorite3 || $scope.favorite4 || $scope.favorite5) == true) {
            document.getElementById('favorite-1').style.border = '';
        }else {
            document.getElementById('favorite-1').style.border = '1px solid red';
        }
    }

    // kiem tra quoc tich
    $scope.nationality = '0'; // bo option trống  

    document.getElementById('nationality').style.border = '1px solid red';
    
    $scope.changeNationality = function() {
        if($scope.nationality != '0') {
            document.getElementById('nationality').style.border = '';
        }
    }
}