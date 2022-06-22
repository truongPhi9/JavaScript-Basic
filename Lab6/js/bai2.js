function show(v) {
    var s = document.getElementById('vc');
    s.style.display = (v==true)? '':'none';
}

function checkItem() {
    var success = true;
    var success1 = '';
    //// kiem tra ten
    let nameProduction = document.getElementById('name-production').value;
    if(nameProduction.length == 0 || isNaN(nameProduction) == false) {
        success1 += 'Vui lòng nhập đúng tên sản phẩm <br>';
        document.getElementById('name-production').style.border = '1px solid red';
        success = false;
    }else {
        success1 = '';
        document.getElementById('name-production').style.border = '1px solid gray';
    }

    // kiem tra loai sp
    var typeProcution = document.getElementById('type-product').value;
    if(typeProcution == '') {
        success1 += 'Vui lòng chọn 1 sản phẩm <br>';
        document.getElementById('type-product').style.border = '1px solid red';
        success = false;
    }else {
        success1 = '';
        document.getElementById('type-product').style.border = '1px solid gray';
    }

    // kiem tra gia
    let price = document.getElementById('price').value;
    price = parseFloat(price);
    console.log(price);
    if(price < 0 || isNaN(price) == true || price == '') {
        success1 += 'Vui lòng nhập đúng giá sản phẩm <br>';
        document.getElementById('price').style.border = '1px solid red';
        success = false;
    }else {
        success1 = '';
        document.getElementById('price').style.border = '1px solid gray';
    }

    let loca = document.getElementsByName('lacation');
    console.log(loca[0].checked == false)
    if(loca[0].checked == false && loca[1].checked == false) {
        success1 += 'Vui lòng chọn nơi giao hàng';
        success = false;
    }else {
        success1 = '';
    }

    if(success1 == '') {
        success1 = 'Bạn đã nhập Đúng dữ liệu';
        document.getElementById('show-noti').style.color = 'green';
    }
    document.getElementById('show-noti').innerHTML = success1;
    return success;
}