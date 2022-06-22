function addItem() {
    // lay du lieu tu the input
    var a = document.getElementById('a1').value;
    var b = document.getElementById('b2').value;
    var c = document.getElementById('c3').value;

    // kiem tra cac so a b c
    if(isNaN(a) == true || isNaN(b) == true || isNaN(c) == true) {
        alert("Bạn đã nhập sai dữ liệu");
    }

    if(isNaN(a) == true) {
        a = document.getElementById('a1').value = "0";
    }else if(isNaN(b) == true) {
        b = document.getElementById('b2').value = "0";
    }else if(isNaN(c) == true) {
        c = document.getElementById('c3').value = "0";
    }
    
    // chuyen doi kieu du lieu trong input
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    
    // thuc hien tinh toan
    var delta = b**2 - 4 * a * c;   // tinh delta

    /// giai nghiem
    var x1 = ((-b + Math.sqrt(delta)) / (2 * a));  
    var x2 = ((-b - Math.sqrt(delta)) / (2 * a));

    /// in ra tong hai nghiem
    var sum = x1 + x2;
    console.log(sum);
    if(isNaN(sum) == true) {
        document.getElementById('sum').innerHTML = '0';
    }else {
        document.getElementById('sum').innerHTML = sum.toFixed(2);
    }
    
    if(a == 0) {
        var x = -c / b;
        if(b == 0) {
            if(c == 0) {
                document.getElementById('notifi').innerHTML = 'Phương Trình Vô Số Nghiệm';
                document.getElementById('x1').innerHTML = '';
                document.getElementById('x2').innerHTML = '';
            }else {
                document.getElementById('notifi').innerHTML = 'Phương Trình Vô Nghiệm';
                document.getElementById('x1').innerHTML = '';
                document.getElementById('x2').innerHTML = '';
            }
        }else {
            document.getElementById('notifi').innerHTML = 'Nghiệm của phương trình';
            document.getElementById('x1').innerHTML = "x = " + x.toFixed(2);
        } 
    }else if(delta > 0) {
        // in ra man hinh
        document.getElementById('notifi').innerHTML = 'Phương Trình có 2 nghiệm phân biệt';
        document.getElementById('x1').innerHTML = "x1 = " + x1.toFixed(2);
        document.getElementById('x2').innerHTML = "x2 = " + x2.toFixed(2);
    }else if (delta == 0) {
        var x3 = -(b / (2 * a));
        // in ra man hinh
        document.getElementById('notifi').innerHTML = 'Phương Trình có 1 nghiệm kép';
        document.getElementById('x1').innerHTML = "x = " + x3.toFixed(2);
    }else {
        // in ra man hinh
        document.getElementById('notifi').innerHTML = 'Phương Trình Vô Nghiệm';
        document.getElementById('x1').innerHTML = '';
        document.getElementById('x2').innerHTML = '';
    }

    // in phuong trinh ra man hinh
    // var equa = a + "x<sup>2</sup>" + " + " + b + "x" + " + " + c + " = 0";
    // document.getElementById("equation").innerHTML = equa;

    // khong in ra so neu a b = 1
    if(a == 1) {
        a = '';
        var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
        document.getElementById("equation").innerHTML = equa;
    }

    if(b == 1) {
        b = ' + ' + '';
        var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
        document.getElementById("equation").innerHTML = equa;
    }

    // khong in ra so neu a b = -1
    if(a == -1) {
        a = '-' + '';
        var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
        document.getElementById("equation").innerHTML = equa;
    }
    if(b == -1) {
        b = ' - ' + '';
        var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
        document.getElementById("equation").innerHTML = equa;
    }

    // doi dau '+' cho b va c 
    if(b > 0) {
        b = " + " + b;
        var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
        document.getElementById("equation").innerHTML = equa;
    }
    if(c > 0) {
        c = " + " + c;
        var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
        document.getElementById("equation").innerHTML = equa;
    }
    
    /// doi dau '-' cho a, b va c
    if(b < 0) {    
        b *= -1;
        b = " - " + b;
        var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
        document.getElementById("equation").innerHTML = equa;
    }
    if(c < 0) {
        c *= -1;
        c = " - " + c;
        var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
        document.getElementById("equation").innerHTML = equa;
    }
    if(a < 0) {
        a *= -1;
        a = "-" + a;
        var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
        document.getElementById("equation").innerHTML = equa;
    }

    ///a = 0 c = 0 thi khong in ra man hinh
    if(a == 0) {
        a = '';
        b = '';
        var equa = b + "x" + c + " = 0";
        document.getElementById("equation").innerHTML = equa;
    }

    if(c == 0) {
        c = '';
        var equa = a + "x<sup>2</sup>" + b + "x" + c + " = 0";
        document.getElementById("equation").innerHTML = equa;
    }

    // xoa du lieu trong input sau khi nhap xong
    var a = document.getElementById('a1').value = " ";
    var b = document.getElementById('b2').value = " ";
    var c = document.getElementById('c3').value = " ";

    // hien so lan giai
    var view = sessionStorage.getItem('count');
    if(view == null) {
        view = 1;
    }else {
        view++;
    }
    sessionStorage.setItem('count', view);
    document.getElementById('count').innerHTML = view;
}

document.getElementById('autonumber').disabled = true;
function random() {
    a = Math.round(Math.random()*20 - 10);
    b = Math.round(Math.random()*20 - 10);
    c = Math.round(Math.random()*10 - 10);
    a = document.getElementById('a1').value = a;
    b = document.getElementById('b2').value = b;
    c = document.getElementById('c3').value = c;
    document.getElementById('autonumber').disabled = false;
}

//// ham hien thi thoi giam 
function timeOut() {
    var time = new Date();
    var hour = time.getHours();
    var minus = time.getMinutes();
    var second = time.getSeconds();
    document.getElementById('hour').innerHTML = hour + ' :';
    if(minus < 10) {
        document.getElementById('Minutes').innerHTML = '0' + minus + ' :';
    }else {
        document.getElementById('Minutes').innerHTML = minus + ' :';
    }
    
    if(second < 10) {
        document.getElementById('second').innerHTML = '0' + second;
    }else {
        document.getElementById('second').innerHTML = second;
    }
}
/// su du ham setInterval de load lai thoi gian moi theo 1 giay
var countTime = setInterval(timeOut, 1000);