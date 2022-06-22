var vlue;

function check() {
    let nameProduction = document.getElementById('name-production').value;
    console.log(nameProduction);
    if(nameProduction == '') {
        vlue = document.getElementById('noti-1').innerText = 'Bạn chưa nhập tên sản phẩm';
    }else if(nameProduction.length < 5) {
        vlue = document.getElementById('noti-1').innerText = 'Phải nhập tối thiểu là 5 ký tự';
    }else {
        vlue = document.getElementById('noti-1').innerText = '';
    }

    console.log(vlue);
    if(vlue != '') {
        setTimeout(function() {
            document.getElementById('noti-1').innerText = '';
        }, 2000);
    }
}