var watch = null;

function allTime() {
    var time = new Date();
    var hour = time.getHours();
    var mins = time.getMinutes();
    var second = time.getSeconds();
    
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

watch = setInterval(allTime, 1000);

function startDropTime() {
    if(watch == null) {
        watch = setInterval(allTime, 1000);
    }else {
        clearInterval(watch);
        watch = null;
    }
}

function reload() {
    location.reload();
}

function welcome() {
    document.getElementById('wel').innerHTML = '<h3 style="color: white; letter-spacing: 5px; text-align: center; margin-top: 20px;">Tôi là Trương Tước Phi Chào bạn! Chúc một ngày tốt lành</h3>'
}

setTimeout(welcome, 10000);

