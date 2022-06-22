var student = {
    ten: null,
    diem: null,
    hocluc: null,
    // ham xet hoc luc 
    hoclucSv: function() {
        if(this.diem < 5) {
            return 'Yếu';
        }else if(this.diem >= 5 && this.diem <= 6.5) {
            return 'Trung Bình';
        }else if(this.diem > 6.5 && this.diem <= 7.5) {
            return 'Khá';
        }else if(this.diem > 7.5 < this.diem <= 10) {
            return 'Giỏi';
        }
    }   
}

console.log(student);

var todoList = [

]

function result() {
    student.ten = document.getElementById('name').value;
    student.diem = document.getElementById('point').value;

    document.getElementById('name-result').innerHTML = student.ten;
    document.getElementById('point-result').innerHTML = student.diem;
    document.getElementById('ability-result').innerHTML = student.hoclucSv();

    if(isNaN(student.ten) == false) {
        document.getElementById('name-result').innerHTML = '<p style="color: red; font-weight: 600;">Lỗi</p>';
        document.getElementById('noti').style.display = 'block';
    }else {
        document.getElementById('noti').style.display = 'none';
    }

    console.log(student.diem == '');
    if(isNaN(student.diem) == true || student.diem == '') {
        document.getElementById('point-result').innerHTML = '<p style="color: red; font-weight: 600;">Lỗi</p>';
        document.getElementById('ability-result').innerHTML = '<p style="color: red; font-weight: 600;">Lỗi</p>';
        document.getElementById('noti').style.display = 'block';
    }else {
        document.getElementById('noti').style.display = 'none';
    }
}