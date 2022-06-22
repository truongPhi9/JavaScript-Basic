function chonco(){
    let size="";
    var arr = document.getElementsByName("co");
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i].checked);
        if (arr[i].checked) {
            size = arr[i].value;
        }
     }//for
     str = "Kích thước bạn đã chọn là: " + size;
     document.getElementById("coKemDaChon").innerHTML= str;
} 