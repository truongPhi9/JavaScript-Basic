var add = document.getElementById('data').value;   // lay gia tri trong the input 
add = parseFloat(add);    /// chuyen value trong input sang kieu so
var price_const = document.getElementById('data').getAttribute('data-price');

// ham tang gia tri cho the input
function addItem() {
    add++;
    document.getElementById('data').setAttribute('value', add);   // su dung setAttribute de thay doi gia tri trong input
    console.log(add);
    var product = document.getElementById('title-product').innerText;
    document.getElementById('show-product').innerText = product;
    document.getElementById('show-money').innerText = (price_const * add).toLocaleString('en') + ' ' + 'VNĐ';
}

// ham giam gia tri cho the input
function reductionItem() {
    if(add == 1) {
        add = 1;
    }else {
        add--;
        document.getElementById('show-money').innerText = (price_const * add).toLocaleString('en');
    }
    document.getElementById('data').setAttribute('value', add);
    console.log(add);
}

function priceItem() {
    var price_const = document.getElementById('data').getAttribute('data-price');
    if(addItem != 0) {
        document.getElementById('show-money').innerText = price_const * add;
    }

    if(reductionItem != 0) {
        document.getElementById('show-money').innerText = price_const * add;
    }
}
