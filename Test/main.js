var tongtien = 0;
var khuyenmai = 0;

function tinh() {
    // lay gia tri trong the input
    var soluong = document.getElementById('soluong').value;
    var dongia = document.getElementById('gia').value;

    if(soluong > 10) {
        tongtien = soluong * dongia * 0.9;
        khuyenmai = soluong * dongia * 0.1;
    }else if(soluong > 5 && soluong <= 10) {
        tongtien = soluong * dongia * 0.95;
        khuyenmai = soluong * dongia * 0.05;
    }else {
        tongtien = soluong * dongia;
        khuyenmai = 0;
    }
    
    document.getElementById('km').innerHTML = khuyenmai.toLocaleString();
    document.getElementById('tongtien').innerHTML = tongtien.toLocaleString() + 'VNĐ';
}

function xoa() {
    var soluong = document.getElementById('soluong').value = '';
    var dongia = document.getElementById('gia').value = ' ';
    document.getElementById('km').innerHTML = '';
    document.getElementById('tongtien').innerHTML = '';
    document.getElementById('soluong').focus();
}