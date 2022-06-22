var flag = true;
var count = 0;
function martIndex(index) {
    var button = document.getElementsByTagName('button')[index];
    button.innerHTML = flag? "X":"O";   /// dieu kien toan tu 3 ngoi 
    button.setAttribute('disabled', 'true');   /// tat nut button sau khi nhan
    document.getElementById('turn-round').innerText = flag? "O":"X";   /// hiện thị lượt đi
    button.style.color = flag? "blue":"red";
    flag = !flag;    /// phụ định lại dieu kiên
    count++;
    if(count == 10) {
        alert('Game over!');
        location.reload();
    }
}