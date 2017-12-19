function searchbtn(){
		var keyword = $.trim($('#keyword').val());
		if(keyword == ''){
			alert("请填写关键词");
			return false;	
		}else if(keyword=="输入关键字"){
			alert("请填写关键词");
			return false;	
			
		}else{
		
			$("#SearchForm").submit();
		}
	}


function searchbtn1200(){
	var keyword = $.trim($('#keyword1200').val());
	if(keyword == ''){
		alert("请填写关键词");
		return false;	
	}else if(keyword=="ANYA COSMETIC"){
		alert("请填写关键词");
		return false;	
		
	}else{
	
		$("#SearchForm1200").submit();
	}
}	

function searchbtn1600(){
	var keyword = $.trim($('#keyword1600').val());
	if(keyword == ''){
		alert("请填写关键词");
		return false;	
	}else if(keyword=="ANYA COSMETIC"){
		alert("请填写关键词");
		return false;	
		
	}else{
	
		$("#SearchForm1600").submit();
	}
}	
	