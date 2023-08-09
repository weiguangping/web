$(window).load(function () {
	if(!ShopCar.isEmpty()){
		for(var i=0;i<3;i++){
		ShopCar.addProduct(products[i]);	
		}
	};
	var carData = ShopCar.getProductList(); 
	var productList = carData.productList;
	for(var i in productList){
		ShopCar.updatecheck(productList[i].id,false);
	}
	var flag=$('.allcheck').prop("checked");
	if(flag){
	$('.content .bottom span span.totalprice').text(carData.totalAmount);
	}
	else{
		$('.content .bottom span span.totalprice').text("0.00");
	}
	for(var i in productList){
//		console.log(productList[i].id);
	var b=$(".content ul.row li .ov").eq(i).attr("id");
	if(b==productList[i].id){
		$("#"+b).find(".num").val(parseInt(productList[i].number));
		$("#"+b).find(".one5 span").text(productList[i].price*productList[i].number+".00");
	}
	else{
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
		var $check=$("<input type='checkbox' class='checkbtn'/>");
		$check.prop("checked",productList[i].ischeck);
		$($check).appendTo($div1);
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
		if(productList[i].number==0){
			var $a2=$("<a href='javascript:;' class='reduce'>-</a><input type='text' class='num' value='1' id='num'/><a href='javascript:;' class='add'>+</a>")
		}
		else{
		var $a2=$("<a href='javascript:;' class='reduce'>-</a><input type='text' class='num' value='"+parseInt(productList[i].number)+"' id='num'/><a href='javascript:;' class='add'>+</a>")
		}
		$($a2).appendTo($div4);
		if(productList[i].number==0){
		$sp2=$("<span>"+productList[i].price*1+".00</span>");}
		else{$sp2=$("<span>"+productList[i].price*productList[i].number+".00</span>");}
		$($sp2).appendTo($div5);
		$p1=('<p><a href="javascript:;" class="del">删除</a></p><p><a href="###">移到我的关注</a></p>');
		$($p1).appendTo($div6);
	}
	}
})
