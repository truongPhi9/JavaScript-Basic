function checksearch (){
	if(document.formtim.tukhoa.value=='Tìm kiếm')	{
		alert("Bạn chưa nhập từ khóa tìm kiếm…");	
		document.formtim.tukhoa.focus();		
		return false;	// Chặn form không cho submit
	}
  return true; // Cho submit form khi đã kiểm tra xong
}
