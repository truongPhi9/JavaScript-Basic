function addItem(button) {
    var row = button.parentElement.parentElement.cloneNode(true);
    var buttonDel = row.getElementsByTagName('button')[0];
    buttonDel.innerText = 'Xóa';
    buttonDel.setAttribute('onclick', 'deleteRow(this)');
    document.getElementById('show-cart').appendChild(row);
    document.getElementById('show-box-1').style.display = 'block';
    sumItem();
}

function deleteRow(button) {
    var row = button.parentElement.parentElement;
    document.getElementById('show-cart').removeChild(row);
    sumItem();
}

function sumItem() {
    var cart = document.getElementById('show-cart').children;
    console.log(cart);
    // var rows = document.getElementsByTagName('tr');
    var tong = 0;
    var price;
    for(let i = 0; i < cart.length; i++) {
        var price = cart[i].children[2].innerText;
        price = parseFloat(price);
        tong += price;
    }
    document.getElementById('money').innerText = tong.toLocaleString('en');

    if(tong == 0) {
        document.getElementById('show-box-1').style.display = 'none';
    }
}

function disable(obj) {
    console.log(obj);
    var row = obj.parentElement.parentElement;
    var buttonNull = row.getElementsByTagName('button')[0];
    buttonNull.disabled = !buttonNull.disabled;
}

function allItem() {
    var checkpoing = document.getElementsByTagName('tr');
    // console.log(checkpoing[1].children[3].children);
    var text = document.getElementById('checkfrom');
    console.log(checkpoing);
    for(let i = 0; i < checkpoing.length; i++) {
        // console.log(checkpoing[i].children[3].children);
        if(text.checked == false) {
            checkpoing[i].children[0].children[0].checked = false;
            var button = document.querySelectorAll('button')[i];
            button.disabled = true;
        }else {
            checkpoing[i].children[0].children[0].checked = true;
            var button = document.querySelectorAll('button')[i].disabled = false;
            // console.log(button);
            // button.disabled = false;
        }
    }
}