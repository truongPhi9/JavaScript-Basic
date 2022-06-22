let unitPrice = 0;
let amount = 0;

function updateMoney(obj) {
    var row = obj.parentNode.parentNode;

    unitPrice = row.children[2].innerText;
    amount = row.children[3].children[0].value;

    unitPrice = parseFloat(unitPrice);
    amount = parseFloat(amount);
    let intoMoney = unitPrice * amount;
    row.children[4].innerHTML = intoMoney;
    totalMoney();  // goi ham tinh tong 
}

function totalMoney() {  // ham tinh tong so tien
    let sumMoney = 0;
    let rowMoney = document.getElementsByClassName('price');
    for(var i = 0; i < rowMoney.length; i++) { 
        let money = rowMoney[i].innerText;
        money = parseInt(money);
        if(isNaN(money) == true) {
            money = 0;
        }
        sumMoney += money;
        document.getElementById('sum').innerText = sumMoney.toLocaleString('en') + ' ' + 'VNĐ';
    }
}

function onDisabled(obj) {
    var checkBox = obj.parentElement.parentElement.children[3].children[0];
    checkBox.disabled = !checkBox.disabled;
    console.log(checkBox.disabled);
    if(checkBox.disabled == false) {
        checkBox.style.border = '2px solid rgba(86, 216, 228, 1)';
    }else {
        checkBox.style.border = '1px solid gray';
    }
    checkBox.focus();
}

function choosePrice() {
    let optionPrice = document.getElementById('listPrice');
    let untilPrice_1 = document.getElementsByName('price-1');
    let choose = optionPrice.value;
    // console.log(choose);
    // console.log(untilPrice_1[0].parentElement.style.display = 'none');
    for(var i = 0; i < untilPrice_1.length; i++) {
        let priceItem = parseFloat(untilPrice_1[i].innerText);
        console.log(priceItem);
        if(priceItem < choose || choose == '0') {
            untilPrice_1[i].parentElement.style.display = '';
        }else {
            untilPrice_1[i].parentElement.style.display = 'none';
        }
    }
}