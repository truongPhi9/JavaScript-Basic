var so1;
var so2;

function choso() {
    var x  = Math.round(Math.random() * 20) + 1;
    var y  = Math.round(Math.random() * 20) + 1;

    so1 = document.getElementById('x').value = x;
    so2 = document.getElementById('y').value = y;
}

function ok() {
    var ketqua = so1 + so2;
    var kiemtra = document.getElementById('tl').value;
    if(kiemtra == ketqua) {
        document.getElementById('ketqua1').innerText = 'Chính xác Hay lắm! Mời bé tiếp tục';
    }else {
        document.getElementById('ketqua1').innerText = 'Ôi sai rồi! Thử lại đi bé ';
    }

    setTimeout(function() {
        document.getElementById('ketqua1').innerText = '';
    }, 5000)

    var lan = sessionStorage.getItem('dem');
    if(lan == null) {
        lan = 1;
    }else {
        lan++;
    }
    
    sessionStorage.setItem('dem', lan);
    document.getElementById('dem').innerText = lan;

    if(lan > 10) {
        var button = document.getElementsByName('bt');
        button[0].style.display = 'none';
        button[1].style.display = 'none';
    }else {
        var button = document.getElementsByName('bt');
        button[0].style.display = '';
        button[1].style.display = '';
    }
}