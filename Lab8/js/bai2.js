function timeCurrent() {
    let time = new Date();

    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();

    if(hour == 0) {
        document.getElementById('hour').innerHTML = '0' + hour;
    }else {
        document.getElementById('hour').innerHTML = hour;
    }

    if(minute < 10) {
        document.getElementById('minute').innerHTML = '0' + minute;
    }else {
        document.getElementById('minute').innerHTML = minute;
    }
    
    if(second < 10) {
        document.getElementById('second').innerHTML = '0' + second;
    }else {
        document.getElementById('second').innerHTML = second;
    }
}

let day = setInterval(timeCurrent, 1000)

function start() {
    day = setInterval(timeCurrent, 1000);
}

function stop() {
    clearInterval(day);
}

function showLesson() {
    let web = document.getElementById('selectbox').value;
    console.log(web);
    location.replace(web);
    window.open(web, 'Web Thầy Long', "width=1000,height=600,left=450,top=50");
}