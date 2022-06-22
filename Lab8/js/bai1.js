app = angular.module('myApp', []);
app.controller('display', handling);

function handling($scope) {
    // var notification = $scope.noti;
    // console.log(notification);
}

function loadWeb() {
    let notification = document.getElementById('noti').
    console.log(notification.outerText != null);
    if(notification.outerText != null) {
        setTimeout(function() {
            // location.replace('https://longnv.name.vn/');
            let web = 'https://longnv.name.vn/';
            window.open(web, 'Web Thầy Long', "width=1000,height=600,left=450,top=50");
        }, 5000);
    }
}


