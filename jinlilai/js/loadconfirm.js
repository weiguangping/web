$(window).load(function () {
	if(!ShopCar.isEmpty()){
		for(var i=0;i<3;i++){
		ShopCar.addProduct(products[i]);	
		}
		var carData = ShopCar.getProductList(); 
		var productList = carData.productList;
		for(var i in productList){
		ShopCar.updatecheck(productList[i].id,true);
		}
	};
	if(localStorage.getItem("confirm")){
		var paroductList=localStorage.getItem("confirm");
		var productList=JSON.parse(paroductList);
		var $row=$('.content ul.row');
		var $li=$("<li></li>");
		$row.append($li);
		var $div=$("<div class='ov' id='"+productList[0].id+"'></div>");
		$($div).appendTo($li);
		var $div1=$("<div class='one1 fl on'></div>")
		var $div2=$("<div class='one2 fl'></div>")
		var $div3=$("<div class='one3 fl on'></div>")
		var $div4=$("<div class='one4 fl on'></div>")
		var $div5=$("<div class='one5 fl on'></div>")
		var $div6=$("<div class='one6 fl on'></div>")
		$($div1).appendTo($div);
		$($div2).appendTo($div);
		$($div3).appendTo($div);
		$($div4).appendTo($div);
		$($div5).appendTo($div);
		$($div6).appendTo($div);
		var $a=$("<a href='product_detail.html'></a>");
		var $img=$("<img src='"+productList[0].img+"' alt='img1' class='fl'>");
		$img.appendTo($a);
		$($a).appendTo($div2);
		var $di=$("<div class='fl'><p><a href='product_detail.html'>"+productList[0].name1+"</a></p><p><a href='product_detail.html'>"+productList[0].name2+"</a></p></div>");
		$($di).appendTo($div2);
		var $di2=$("<div class='fl'><p><a href='product_detail.html'>"+productList[0].name3+"</a></p><p><a href='product_detail.html'>"+productList[0].name4+"</a></p></div>");			
		$($di2).appendTo($div2);
		$sp1=$("<span>"+productList[0].price+".00</span>");
		$($sp1).appendTo($($div3));
		var $a2=$("<p>"+productList[0].number+"</p>")
		$($a2).appendTo($div4);
		$sp2=$("<span>"+productList[0].price*productList[0].number+".00</span>");
		$($sp2).appendTo($div5);
		$p1=('<p>有货</p>');
		$($p1).appendTo($div6);
		var zongjia=parseInt(productList[0].price)*parseInt(productList[0].number);
		localStorage.setItem("tolprice",zongjia);
	}
	else{
	var carData = ShopCar.getProductList(); 
	var productList = carData.productList;
	for(var i in productList){
		if(productList[i].ischeck){
			var $row=$('.content ul.row');
		var $li=$("<li></li>");
		$row.append($li);
		var $div=$("<div class='ov' id='"+productList[i].id+"'></div>");
		$($div).appendTo($li);
		var $div1=$("<div class='one1 fl on'></div>")
		var $div2=$("<div class='one2 fl'></div>")
		var $div3=$("<div class='one3 fl on'></div>")
		var $div4=$("<div class='one4 fl on'></div>")
		var $div5=$("<div class='one5 fl on'></div>")
		var $div6=$("<div class='one6 fl on'></div>")
		$($div1).appendTo($div);
		$($div2).appendTo($div);
		$($div3).appendTo($div);
		$($div4).appendTo($div);
		$($div5).appendTo($div);
		$($div6).appendTo($div);
		var $a=$("<a href='product_detail.html'></a>");
		var $img=$("<img src='"+productList[i].img+"' alt='img1' class='fl'>");
		$img.appendTo($a);
		$($a).appendTo($div2);
		var $di=$("<div class='fl'><p><a href='product_detail.html'>"+productList[i].name1+"</a></p><p><a href='product_detail.html'>"+productList[i].name2+"</a></p></div>");
		$($di).appendTo($div2);
		var $di2=$("<div class='fl'><p><a href='product_detail.html'>"+productList[i].name3+"</a></p><p><a href='product_detail.html'>"+productList[i].name4+"</a></p></div>");			
		$($di2).appendTo($div2);
		$sp1=$("<span>"+productList[i].price+".00</span>");
		$($sp1).appendTo($($div3));
		var $a2=$("<p>"+productList[i].number+"</p>")
		$($a2).appendTo($div4);
		$sp2=$("<span>"+productList[i].price*productList[i].number+".00</span>");
		$($sp2).appendTo($div5);
		$p1=('<p>有货</p>');
		$($p1).appendTo($div6);
		} 
	}
	}
	var tolpri=parseInt(localStorage.getItem("tolprice"))+20;
	if(!isNaN(tolpri))
	{$('.confirm_order .total span.totalprice').text(tolpri+".00");}
})