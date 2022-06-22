var equation = {
    a: null,
    b: null,
    c: null,
    delta: null,
    /// ham tinh delta cho phuong trinh
    resultEquation: function() {
        // chuyen cac bien a b c sang dang so;
        this.a = parseFloat(this.a);
        this.b = parseFloat(this.b);
        this.c = parseFloat(this.c);

        this.delta = this.b**2-4*this.a*this.c;   /// tinh delta

        /// kiem tra delta
        if(this.a == 0) {
            var x = -this.c / this.b;
            if(this.b == 0) {
                if(this.c == 0) {
                    document.getElementById('noti-equation').innerHTML = ' Vô số nghiệm';
                    document.getElementById('test-equation-1').innerHTML = '';
                    document.getElementById('test-equation-2').innerHTML = '';
                }else {
                    document.getElementById('noti-equation').innerHTML = ' Vô Nghiệm';
                    document.getElementById('test-equation-1').innerHTML = '';
                    document.getElementById('test-equation-2').innerHTML = '';
                }
            }else {
                document.getElementById('noti-equation').innerHTML = ' có một nghiệm';
                document.getElementById('test-equation-1').innerHTML = "x = " + x.toFixed(2);
            } 
        }else if(this.delta > 0) {
            document.getElementById('noti-equation').innerHTML = ' có hai nghiệm'; 
            var x1 = (-this.b + Math.sqrt(this.delta))/(2*this.a);    /// nghiem thu nhat
            var x2 = (-this.b - Math.sqrt(this.delta))/(2*this.a);    /// nghiem thu hai
            document.getElementById('test-equation-1').innerHTML = 'x1 = ' + x1.toFixed(2);
            document.getElementById('test-equation-2').innerHTML = 'x2 = ' + x2.toFixed(2);
            console.log(x1, x2);     
        }else if(this.delta == 0) {
            document.getElementById('noti-equation').innerHTML = ' có một nghiệm';
            var x3 = -this.b/(2*this.a);   
        }else {
            document.getElementById('noti-equation').innerHTML = ' vô nghiệm';
            document.getElementById('test-equation-1').innerHTML = '';
            document.getElementById('test-equation-2').innerHTML = '';
            // phuong trinh vo nghiem;
        }
    },

    // ham nhap du lieu 
    inputData: function() {
        this.a = document.getElementById('first-number').value;   ///value la lay gia tri trong input
        this.b = document.getElementById('second-number').value;
        this.c = document.getElementById('third-number').value;
    },
}

console.log(equation);

/// ham in ra ket qua ra man hinh
function result() {
    // nhap va lau du lieu
    equation.inputData();

    // thong bao va in ra man hinh
    // document.getElementById('result-equation').innerHTML = equation.resultEquation();
    equation.resultEquation();
 
    // hien thong bao neu nguoi dung nhap sai du lieu
    if(isNaN(equation.a) == true || isNaN(equation.b) == true || isNaN(equation.c) == true) {
        document.getElementById('noti').style.display = 'block';
    }else {
        document.getElementById('noti').style.display = 'none';
    }

    //// in ra phuong trinh
    //// xet dau cho a
    if(equation.a == 1) { 
        equation.a = '';
        document.getElementById('equation').innerHTML = equation.a + 'x<sup>2</sup>' + equation.b + 'x' + equation.c + ' = 0';
    }else if (equation.a == 0) {
        document.getElementById('equation').innerHTML = equation.b + 'x' + equation.c + ' = 0';
    }else if(equation.a < 0 && equation.a != -1) {
        equation.a = equation.a * -1;
        equation.a = ' - ' + equation.a;
        document.getElementById('equation').innerHTML = equation.a + 'x<sup>2</sup>' + equation.b + 'x' + equation.c + ' = 0';
    }else if(equation.a == -1) {
        equation.a = ' - ';
        document.getElementById('equation').innerHTML = equation.a + 'x<sup>2</sup>' + equation.b + 'x' + equation.c + ' = 0';
    }

    /// xet dau cho b
    if(equation.b > 0) {
        equation.b = ' + ' + equation.b;
        document.getElementById('equation').innerHTML = equation.a + 'x<sup>2</sup>' + equation.b + 'x' + equation.c + ' = 0';
    }else if(equation.b == 1) { 
        equation.b = '';
        document.getElementById('equation').innerHTML = equation.a + 'x<sup>2</sup>' + equation.b + 'x' + equation.c + ' = 0';
    }else if (equation.b == 0) {
        document.getElementById('equation').innerHTML = equation.a + 'x<sup>2</sup>' + equation.c + ' = 0';
    }else if(equation.b < 0 && equation.b != -1) {
        equation.b = equation.b * -1;
        equation.b = ' - ' + equation.b;
        document.getElementById('equation').innerHTML = equation.a + 'x<sup>2</sup>' + equation.b + 'x' + equation.c + ' = 0';
    }else if(equation.b == -1) {
        equation.b = ' - ';
        document.getElementById('equation').innerHTML = equation.a + 'x<sup>2</sup>' + equation.b + 'x' + equation.c + ' = 0';
    }

    /// xet dau cho c 
    if(equation.c > 0) {
        equation.c = ' + ' + equation.c;
        document.getElementById('equation').innerHTML = equation.a + 'x<sup>2</sup>' + equation.b + 'x' + equation.c + ' = 0';
    }else if(equation.c == 1) { 
        equation.c = '';
        document.getElementById('equation').innerHTML = equation.a + 'x<sup>2</sup>' + equation.b + 'x' + equation.c + ' = 0';
    }else if (equation.c == 0) {
        document.getElementById('equation').innerHTML = equation.a + 'x<sup>2</sup>' + equation.b + 'x' + ' = 0';
    }else if(equation.c < 0 && equation.c != -1) {
        equation.c = equation.c * -1;
        equation.c = ' - ' + equation.c;
        document.getElementById('equation').innerHTML = equation.a + 'x<sup>2</sup>' + equation.b + 'x' + equation.c + ' = 0';
    }else if(equation.c == -1) {
        equation.c = ' - ';
        document.getElementById('equation').innerHTML = equation.a + 'x<sup>2</sup>' + equation.b + 'x' + equation.c + ' = 0';
    }
    
    /// hien thi ket neu dealta > 0 va nho < 0
    if(equation.delta > 0 || equation.delta < 0) {
        document.getElementById('box-body-2').style.display = 'block';
    }else if(equation.delta == 0) {
        document.getElementById('box-body-2').style.display = 'none';
    }
}
