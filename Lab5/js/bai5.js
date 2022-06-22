const adults = 1000000;
const children = 600000;

var sumAdults = 0; 
var sumChildren = 0;
var money = 0;
var SumMoney = 0;

function calculation() {
    var data = document.getElementById('data').children[0].children;
    var ListMoney = document.getElementsByClassName('money');
    for(let i = 1; i < data.length-1; i++) {
        let conutAdults = data[i].children[1].innerText;
        let conutchildren = data[i].children[2].innerText;

        conutAdults = parseFloat(conutAdults);
        conutchildren = parseFloat(conutchildren);
        
        sumAdults += conutAdults;
        sumChildren += conutchildren;

        document.getElementById('countAdults').innerText =  sumAdults;
        document.getElementById('countChildren').innerText = sumChildren;

        money = (conutAdults * adults) + (conutchildren * children);
        ListMoney[i].innerText = money.toLocaleString('en');
        SumMoney += money;
    }

    document.getElementById('sumMoney').innerText = SumMoney.toLocaleString('en');
}   

function changeMoney(obj) {
    var row = obj.parentNode;
    console.log(row);
    var firstNumber = row.children[1].innerText;
    var secondtNumber = row.children[2].innerText;
    money = (firstNumber * adults) + (secondtNumber * children);
    SumMoney += money;
    row.children[3].innerText = money.toLocaleString('en');
}

function hideShow() {
    var data = document.getElementById('data').children[0].children;
    console.log(data);
    for(var i = 1; i < data.length-1; i++) {
        if(data[i].style.display == 'none') {
            data[i].style.display = 'block';
        }else {
            data[i].style.display = 'none';
        }
    }
}

var watch = null;

function time() {
    var time = new Date();
    var hour = time.getHours();
    var mins = time.getMinutes();
    var second = time.getSeconds();
    console.log(second);
    document.getElementById('hour').innerHTML = hour;
    if(mins < 10) {
        document.getElementById('mins').innerHTML = '0' + mins;
    }else {
        document.getElementById('mins').innerHTML = mins;
    }
    if(second < 10) {
        document.getElementById('second').innerHTML = '0' + second;
    }else {
        document.getElementById('second').innerHTML = second;
    }
}

watch = setInterval(time, 1000);
