function registration() {
    let codeStudent = document.getElementById('codeStudent').value;
    let nameStudent = document.getElementById('nameStudent').value;
    let email = document.getElementById('email').value;

    // kiem tra mssv 
    if(codeStudent == '') {
        document.getElementById('codeStudent').style.border = '1px solid red';
        document.getElementById('noti-1').innerHTML = 'Bạn chưa nhập mã sinh viên';
    }else {
        document.getElementById('codeStudent').style.border = '';
        document.getElementById('noti-1').innerText = '';
    }

    // kiem tra ho va ten
    if(nameStudent == '') {
        document.getElementById('nameStudent').style.border = '1px solid red';
        document.getElementById('noti-2').innerHTML = 'Bạn chưa nhập họ và tên';
    }else {
        document.getElementById('nameStudent').style.border = '';
        document.getElementById('noti-2').innerText = '';
    }

    // kiem tra email 
    // kiem tra dinh dang email
    let emailFormat = /^[a-zA-Z]+\d{0,9}@[a-z]+[.]{1,1}[a-z]+[.]{0,1}[a-z]{0,}/.test(email);
    if (email == '') {
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('noti-3').innerHTML = 'Bạn chưa nhập Email';
    }else if(emailFormat == false) {
        document.getElementById('email').style.border = '1px solid red';
        document.getElementById('noti-3').innerHTML = 'Email bạn nhập chưa đúng';
    }else {
        document.getElementById('email').style.border = '';
        document.getElementById('noti-3').innerText = '';
    }

    /// kiem tra gioi tinh
    let gender = document.getElementsByName('gender');
    if(gender[0].checked == false && gender[1].checked == false) {
        document.getElementById('gender').style.border = '1px solid red';
        document.getElementById('noti-4').innerHTML = 'Bạn chưa chọn giới tính';
    }else {
        document.getElementById('gender').style.border = '';
        document.getElementById('noti-4').innerHTML = '';
    }

    // kiem tra so thich 
    let favorite = document.getElementById('favorite-1').children;
    let coutFavorite = 0;
    for(var i = 1; i <= 5; i++) {
        if(favorite[i].checked) {
            coutFavorite++;
        }
    }

    if(coutFavorite != 0) {
        document.getElementById('favorite-1').style.border = '';
        document.getElementById('noti-5').innerHTML = '';

    }else {
        document.getElementById('favorite-1').style.border = '1px solid red';
        document.getElementById('noti-5').innerHTML = 'Bạn chưa chọn sở thích';
    }

    // kiem tra quoc tich
    let allNationnalyty = document.getElementById('nationality').value;
    let nationality = document.getElementById('nationality').children;
    console.log(nationality);
    for(var i = 0; i < nationality.length; i++) {
        if(allNationnalyty == 0) {
            document.getElementById('nationality').style.border = '1px solid red';
            document.getElementById('noti-6').innerHTML = 'Bạn chưa chọn quốc gia';
        }else {
            document.getElementById('nationality').style.border = '';
            document.getElementById('noti-6').innerHTML = '';
        }
    }
}