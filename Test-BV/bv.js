var firstNumber;
var secondNumber;

function randomNumber() {
    var so1 = Math.round(Math.random() * 20) + 1;
    var so2 = Math.round(Math.random() * 20) + 1;

    firstNumber = document.getElementById('firstNumber').value = so1;
    secondNumber = document.getElementById('secondNumber').value = so2;
}

function answer() {
    var ketqua = firstNumber + secondNumber;
    var answerInput = document.getElementById('answerCal').value;

    if(answerInput == ketqua) {
        document.getElementById('noti').innerText = 'Chính xác! Mời bé tiếp tục';
        document.getElementById('noti').style.color = 'green';
    }else {
        document.getElementById('noti').innerText = 'Sai rồi bé ơi! thử lại đi';
        document.getElementById('noti').style.color = 'red';
    }

    setTimeout(function() {
        document.getElementById('noti').innerText = '';
    }, 5000)

    var view = sessionStorage.getItem('cout');
    if(view == null) {
        view = 1;
    }else {
        view++;
    }
    
    sessionStorage.setItem('cout', view);
    document.getElementById('cout').innerText = view;

    if(view > 10) {
        var button = document.getElementsByName('but');
        button[0].style.display = 'none';
        button[1].style.display = 'none';
    }else {
        var button = document.getElementsByName('but');
        button[0].style.display = '';
        button[1].style.display = '';
    }
}
