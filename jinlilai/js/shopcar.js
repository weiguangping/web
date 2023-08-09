$(window).load(function(){
	$('.allcheck').prop("checked",false);
	$('.checkbtn').prop("checked",false);
	$('.allcheck').click(function () {
		var flag=$(this).prop("checked");
		$('.allcheck').prop("checked",flag);
		$('.checkbtn').prop("checked",flag);
		if(!flag){
			$('.content .bottom span .totalprice').text("0.00");
			$('.content .bottom span b').text(0);
			var carData = ShopCar.getProductList(); 
			var productList = carData.productList;
			for(var i in productList){
				ShopCar.updatecheck(productList[i].id,false);
//				productList[i].ischeck=false;
			}
		}
		else{
			var shuliang=$('.content ul.row li').length;
			$('.content .bottom span b').text(parseInt(shuliang));
			var carData = ShopCar.getProductList(); 
			var productList = carData.productList;
			for(var i in productList){
				var num=productList[i].id;
				var numm=parseInt($("#"+num).find(".one4 .num").val());
				ShopCar.updatecheck(productList[i].id,true);
				var bb=ShopCar.updateProduct(productList[i].id,parseInt(numm));
			}
			$('.content .bottom span .totalprice').text(bb.totalAmount);
		}
	})
	$('.content ul.row .one4 .add').click(function () {
		var bool=$(this).parent().siblings(".one1").find("input").prop("checked");
		var num=parseInt($(this).prev().val());
		num++;
		$(this).prev().val(num);
		var divid=$(this).parent().parent().attr("id");
		var carData = ShopCar.getProductList(); 
		var productList = carData.productList;
		for(var i in productList){
			if(divid==productList[i].id){
				productList[i].number=parseInt($("#"+divid).find(".num").val());
				$("#"+divid).find(".one5 span").text(productList[i].price*productList[i].number+".00");
				var bb=ShopCar.updateProduct(divid,parseInt($("#"+divid).find(".num").val()));
				if(bool){
				var tol=parseInt($('.content .bottom span .totalprice').text());
				var t=$(this).parent().siblings(".one3").find("span").text();
				tol+=parseInt(t);
				$('.content .bottom span .totalprice').text(tol+".00");}
//				console.log(bb.totalAmount)
			}
		}
	})
	
	$('.content ul.row .one4 .reduce').click(function () {
		var bool=$(this).parent().siblings(".one1").find("input").prop("checked");
		var num=parseInt($(this).next().val());
		num--;if(num<1){num=1;return;}
		$(this).next().val(num);
		var divid=$(this).parent().parent().attr("id");
		var carData = ShopCar.getProductList(); 
		var productList = carData.productList;
		for(var i in productList){
			if(divid==productList[i].id){
				productList[i].number=parseInt($("#"+divid).find(".num").val());
				$("#"+divid).find(".one5 span").text(productList[i].price*productList[i].number+".00");
				var bb=ShopCar.updateProduct(divid,parseInt($("#"+divid).find(".num").val()));
				if(bool){
				var tol=parseInt($('.content .bottom span .totalprice').text());
				var t=$(this).parent().siblings(".one3").find("span").text();
				tol-=parseInt(t);
				$('.content .bottom span .totalprice').text(tol+".00");}
//				console.log(bb.totalAmount)
			}
		}
	})
	$('.content ul.row .one4 .num').focus(function(e) {
		vall=$(this).val();
	})
	$('.content ul.row .one4 .num').blur(function(e) {
		var val2=$(this).val();
		var ind=val2.indexOf(".");
		var ind2=val2.indexOf("-");
		if(isNaN($(this).val())||$(this).val().substr(0,1)=="0"||$(this).val()==""||ind2!=-1)
		{$(this).val(vall);}
		if(ind!=-1){$(this).val(val2.substr(0,ind))}
		if(ind==0){$(this).val(1);}
		var num=$(this).val();
		var cha=parseInt(num)-parseInt(vall);
//		console.log(cha);
		var bool=$(this).parent().siblings(".one1").find("input").prop("checked");
		var divid=$(this).parent().parent().attr("id");
		var carData = ShopCar.getProductList(); 
		var productList = carData.productList;
		for(var i in productList){
			if(divid==productList[i].id){
				productList[i].number=parseInt($("#"+divid).find(".num").val());
				$("#"+divid).find(".one5 span").text(productList[i].price*productList[i].number+".00");
				var bb=ShopCar.updateProduct(divid,parseInt($("#"+divid).find(".num").val()));
				if(bool){
				var tol=parseInt($('.content .bottom span .totalprice').text());
				var t=$(this).parent().siblings(".one3").find("span").text();
				var pri=parseInt(t)*cha;
				tol+=pri;
				$('.content .bottom span .totalprice').text(tol+".00");}
//				console.log(bb.totalAmount)
			}
		}
	})
//	var num=document.getElementById("num");
	/*$('.content ul.row .one4 .num').keyup(function(e) {
		var coke = e.keyCode;
//		console.log(coke)
		var vv=$(this).val();
		var vvh=$(this).val().length;
		var newv=vv.substr(0,vvh-1);
		var first=vv.substr(0,1);
		if(e.keyCode==32){
			$(this).val(newv);
		}
		if($(this).val()==""){
			$(this).val(1);
		}
		if(isNaN(vv)&&parseInt(vv)>0){
			$(this).val(newv);
		}
		else{
			if(vv.substr(0,1)=="0"||isNaN(vv.substr(0,1))){
				var newv2=vv.substr(1);
				$(this).val(newv2);
			}
		}
	})*/
	$(".checkbtn").click(function () {
		var num=parseInt($(this).parent().siblings(".one4").find(".num").val());
		var jdge=false;
		var listh=$('.content ul.row li').length;
		var id=$(this).parent().parent().attr('id');
		for(var i=0;i<listh;i++){
			if($('.content ul.row li').eq(i).find(".checkbtn").prop("checked")){
				jdge=true;
			}
			else{
				jdge=false;
				break;
			}
		}
		if(!jdge){$('.allcheck').prop("checked",false)}
		else{$('.allcheck').prop("checked",true)};
		var flag=$(this).prop("checked");
		if(!flag){
			var carData = ShopCar.getProductList(); 
			var productList = carData.productList;
			for(var i in productList){
				if(id==productList[i].id)
				{ShopCar.updatecheck(productList[i].id,false);}
			}
			var shuliang=$('.content .bottom span b').text();
			shuliang--;
			$('.content .bottom span b').text(parseInt(shuliang));
			var tol=parseInt($('.content .bottom span .totalprice').text());
			var t=$(this).parent().siblings(".one5").find("span").text();
			tol-=parseInt(t);
			$('.content .bottom span .totalprice').text(tol+".00");
		}
		else{
			var carData = ShopCar.getProductList(); 
			var productList = carData.productList;
			for(var i in productList){
				if(id==productList[i].id)
				{ShopCar.updatecheck(productList[i].id,true);}
			}
			var shuliang=$('.content .bottom span b').text();
			shuliang++;
			$('.content .bottom span b').text(parseInt(shuliang));
		var tol=parseInt($('.content .bottom span .totalprice').text());
			var t=$(this).parent().siblings(".one5").find("span").text();
			tol+=parseInt(t);
			$('.content .bottom span .totalprice').text(tol+".00");
		}
	})
	
	$(".del").click(function(){
		if(confirm("你确定要删除么？")){
		var index=$(this).parent().parent().parent().attr("id");
		var bb=ShopCar.delProductById(index);
		var flag=$("#"+index).find(".one1 .checkbtn").prop("checked");
		if(flag){
		var pri=parseInt($("#"+index).find(".one5 span").text());
		var tol=parseInt($('.content .bottom span .totalprice').text());
		tol-=pri;
		console.log(tol)
		$('.content .bottom span .totalprice').text(tol+".00");
		var shuliang=parseInt($('.content .bottom span b').text());
		shuliang--;
		$('.content .bottom span b').text(shuliang);
		}
		$("#"+index).parent().remove();
//		$('.content .bottom span .totalprice').text(bb.totalAmount);
		
		}
	})
	$('.bottom a.fr').click(function () {
		var li=$(".content ul.row li");
		var arr=[];
		for(var i=0;i<li.length;i++){
			var flag=li.eq(i).find(".checkbtn").prop("checked");
			if(flag){
				var id=li.eq(i).find(".ov").attr("id");
				arr.push(id);
			}
		}
		if(arr.length<=0){
			$(this).attr('href','javascript:;');
			 		alert("亲,请选择需要结算的商品!");
			 		return;
			 }
		else{
			var tolp=parseInt($('.content .bottom span .totalprice').text());
			localStorage.setItem("tolprice",tolp);
			$(this).attr('href','confirm_order.html');
			localStorage.removeItem("confirm");
		}
	})
	$(".delselect").click(function(){
		var li=$(".content ul.row li");
		var arr=[];
		for(var i=0;i<li.length;i++){
			var flag=li.eq(i).find(".checkbtn").prop("checked");
			if(flag){
				var id=li.eq(i).find(".ov").attr("id");
				arr.push(id);
			}
		}
		if(arr.length<=0){
			 		alert("亲,请选择需要删除的商品!");
			 		return;
			 }
		if(confirm("亲，您确定要狠心删除这个商品吗?")){
			for(var i=0;i<arr.length;i++){
			var carData = ShopCar.delProductById(arr[i]);
//			$('.content .bottom span .totalprice').text(carData.totalAmount+".00");
			var flag=$("#"+arr[i]).find(".one1 .checkbtn").prop("checked");
		if(flag){
		var pri=parseInt($("#"+arr[i]).find(".one5 span").text());
		var tol=parseInt($('.content .bottom span .totalprice').text());
		tol-=pri;
		console.log(tol)
		$('.content .bottom span .totalprice').text(tol+".00");
		var shuliang=parseInt($('.content .bottom span b').text());
		shuliang--;
		$('.content .bottom span b').text(shuliang);
		}
			$("#"+arr[i]).parent().remove();
			}
		}
	})
})
