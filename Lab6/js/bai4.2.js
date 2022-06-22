function checklogin(){
	if(document.flogin.u.value==''){
		alert("Bạn chưa nhập username");	
		document.flogin.u.focus(); //Chọn đối tượng u
		return false;   // Chặn form không cho submit
	}
	if(document.flogin.p.value=='') {
		alert("Bạn chưa nhập password");	
		document.flogin.p.focus();	//Chọn đối tượng p
		return false;	
	}	
	return true; // Cho submit form khi đã kiểm tra xong
}
