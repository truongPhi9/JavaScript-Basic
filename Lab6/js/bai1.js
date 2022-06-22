picture = [];

for(var i = 1; i < 9; i++) {
    picture[i] = new Image();
    picture[i].src = 'Picture/' + i + '.jpg'; 
}

let index = 1;

function next() {
    index++;
    document.getElementById('num-index').innerText = index;
    if(index >= picture.length) {
        index = 1;
        document.getElementById('num-index').innerText = '1';
    }
    var img = document.getElementById('pic');
    img.src = picture[index].src;
    console.log(img.src);
}

function prew() {
    index--;
    document.getElementById('num-index').innerText = index;

    if(index <= 0) {
        index = picture.length-1;
        console.log(picture.length);
        document.getElementById('num-index').innerText = '8';
    }
    var img = document.getElementById('pic');
    img.src = picture[index].src;
    console.log(img.src);
}

function first() {
    index = 1;
    document.getElementById('num-index').innerText = index;
    var img = document.getElementById('pic');
    img.src = picture[index].src;
}

function last() {
    index = picture.length-1;
    document.getElementById('num-index').innerText = index;
    var img = document.getElementById('pic');
    img.src = picture[index].src;
}