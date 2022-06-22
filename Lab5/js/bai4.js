function check() {
    var arr = document.getElementsByName('mom');
    console.log(arr);
    var kq = document.getElementById('reuslt');
    var dem = 0;
    kq.innerHTML = '';
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].checked) {
            var v = arr[i].value + ' ';
            var word = document.createTextNode(v);
            var tagp = document.createElement('span');
            tagp.appendChild(word);
            kq.appendChild(tagp);
            document.getElementById('box-check-2').style.display = 'none';
            dem++;
        }
    }

    if(dem > 0) {
        kq.className = 'abc';
        document.getElementById('box-check-1').style.display = 'block';
    }else {
        // kq.innerHTML = '<span>Bạn chưa chọn mục nào</span>';
        document.getElementById('box-check-2').style.display = 'block';
        kq.className = 'xyz';
    }
}

function reload() {
    location.reload();
}

function allCheck() {
    var valueText = document.getElementsByName('mom'); 
    console.log(valueText);
    for(var i = 0; i < valueText.length; i++) {
        valueText[i].checked = true;
    }
}
