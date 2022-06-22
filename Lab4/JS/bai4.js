var w;

function openWin() {
    w = window.open("thontin.html","tt", "width = 400, height = 200 top = 50 left = 60");
    w.focus();
}

function closeWin() {
    w.close();
}

function print() {
    w.print();
}

function moveLittle() {
    w.moveBy(5, 10);
    w.focus();
}

function move() {
    var x = prompt('Nhập x');
    var y = prompt('Nhập y');

    w.moveTo(x, y);
    w.focus();
    console.log(w.focus());
}