var arrayPicture = [
    "Picture/1.jpg",
    "Picture/2.jpg",
    "Picture/3.jpg",
    "Picture/4.jpg",
];

var index = 0;
var indexNum = 1;

function next() {
    document.getElementById('index-num').innerText = ++indexNum;   /// tang so pic len 1 lan
    index++;   
    if(index >= arrayPicture.length) {   /// dieu kien neu index > so pic ben trong mang
        index = 0;
        indexNum = 1;
        document.getElementById('index-num').innerText = indexNum;
    }
    document.getElementById('pict').src = arrayPicture[index];
    // console.log(arrayPicture[index]);
}
var autoPic = setInterval(next, 2000);

function prew() {
    document.getElementById('index-num').innerText = --indexNum;
    index--;
    if(index < 0) {
        index = 0;
        indexNum = 1;
        document.getElementById('index-num').innerText = indexNum;
    }
    document.getElementById('pict').src = arrayPicture[index];
    // console.log(arrayPicture[index]);
}

let check = true; 
var timePause = document.getElementById('pause').style.display = 'none';

function dropPicture() {  /// ham de dung chuyen dong cua hinh
    if(check == true) {
        document.getElementById('pause').style.display = 'block';
        setTimeout(function() {   /// su dung settimeout de an nut pause di
            document.getElementById('pause').style.display = 'none'; 
        }, 1000);
        clearInterval(autoPic);
    }else {
        document.getElementById('play').style.display = 'block';
        setTimeout(function() {   /// su dung settimeout de an nut play di
            document.getElementById('play').style.display = 'none'; 
        }, 1000);
        autoPic = setInterval(next, 2000);
    }
    check = !check;
}