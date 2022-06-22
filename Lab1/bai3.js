function addItem() {
    // lấy giá trị trong thẻ input người dùng nhập
    var a = document.getElementById('new-item-1').value;
    var b = document.getElementById("new-item-2").value;

    // chuyen kieu du lieu ve dang so 
    a = parseFloat(a);
    b = parseFloat(b);

    /// tinh chu vi va dien tich
    var x = (a + b) * 2;
    var y = a * b;
    console.log(x);
    console.log(y);

    /// dua ket qua ra the span id="answer-1" va id="answer-2"
    document.getElementById('answer-1').innerHTML = x;
    document.getElementById('answer-2').innerHTML = y;
}

