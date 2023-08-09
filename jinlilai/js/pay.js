$(function () {
	if(localStorage.getItem("confirm")){
		var paroductList=localStorage.getItem("confirm");
		var productList=JSON.parse(paroductList);
		var tol=parseInt(productList[0].number)*parseInt(productList[0].price)+20;
		$('.pay .xinxi	span.totalprice').text(tol+".00");
	}
	else{
		var totl=parseInt(localStorage.getItem("tolprice"))+20;
		if(!isNaN(totl))
		{$('.pay .xinxi	span.totalprice').text(totl+".00");}
	}
	var date=new Date();
	var y=date.getFullYear();
	var m=date.getMonth()+1;
	var d=date.getDate();
	$('.pay .xinxi	span.date').text(y+'.'+m+'.'+d);
})
