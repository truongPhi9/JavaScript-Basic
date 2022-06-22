function kiemtra() {
    var ht = document.frm1.ht.value;
    var cmnd = document.frm1.cmnd.value;
    var tinh = document.frm1.tinh.value;
    var bosung = document.frm1.bosung.value;
    var loi = '';
    console.log(ht);
    if(ht.length < 3 || ht.length > 30) {
        loi += 'họ tên phải nhập từ 3 đến 30 ký tự<br>';
    }
    if(cmnd.length != 9) {
        loi += 'CMND phải đúng 9 ký tự<br>';
    }

    var s = parseInt(cmnd);
    if(tinh == 0) {
        loi += 'Bạn chưa chọn tỉnh<br>';
    }

    if(bosung.length < 50 || bosung.length > 1000) {
        loi += 'Hãy nhập thông tin bổ sung từ 50 đến 1000 ký tự';
    }

    if(loi.length > 0) {
        document.getElementById('loi').innerHTML = loi;
    }

    setTimeout(function() {
        document.getElementById('loi').style.display = 'none';
    }, 10000);
    return false;
}