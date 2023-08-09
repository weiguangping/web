$(function () {
	$("input[type='checkbox']").prop("checked",true);
	$("ul input[type='checkbox']").click(function () {
		var len=$(".content .bottom li").length;
			var bool=true;
			for(var i=0;i<len;i++){
				if(!$(".content .bottom li").eq(i).find(".btn input").prop("checked")){
					bool=false;
					break;
				}	
			}
			if(!bool){
//				console.log(12)
				$(".allcheckbtn").prop("checked",false);
				$(".allcheckbtn").parent().css("background","url(img/shop/check1.png) no-repeat");
			}
			else{
				$(".allcheckbtn").prop("checked",true);
				$(".allcheckbtn").parent().css("background","url(img/shop/check2.png) no-repeat");
			}
		
		var flag=$(this).prop("checked");
		if(flag){
			$(this).parent().css("background","url(img/shop/check2.png) no-repeat");
			var pri=parseInt($(this).parent().parent().siblings(".price").find("p").text().split("￥")[1]);
			var tolpri=parseInt($(".content .bottom .allcheck .tolpri i").text().split("￥")[1]);
			var num=parseInt($(this).parent().parent().siblings(".input").find("input").val());
//			console.log(parseInt(tolpri))
			var sum=tolpri+pri*num;
			$(".content .bottom .allcheck .tolpri i").text("￥"+sum);
		}
		else{
			$(this).parent().css("background","url(img/shop/check1.png) no-repeat");
			var pri=parseInt($(this).parent().parent().siblings(".price").find("p").text().split("￥")[1]);
			var tolpri=parseInt($(".content .bottom .allcheck .tolpri i").text().split("￥")[1]);
			var num=parseInt($(this).parent().parent().siblings(".input").find("input").val());
			var sum=tolpri-pri*num;
			$(".content .bottom .allcheck .tolpri i").text("￥"+sum);
		}
	})	
	$(".allcheckbtn").click(function () {
		var flag=$(this).prop("checked");
		if(flag){
			var sum=0;
			$("input[type='checkbox']").prop("checked",true);
			$("input[type='checkbox']").parent().css("background","url(img/shop/check2.png) no-repeat");
			var len=$(".content .bottom li").length;
			for(var i=0;i<len;i++){
				var pri=parseInt($(".content .bottom li").eq(i).find(".price p").text().split("￥")[1]);
				var num=parseInt($(".content .bottom li").eq(i).find(".input input").val());
				sum+=pri*num;
			}
			$(".content .bottom .allcheck .tolpri i").text("￥"+sum);
		}
		else{
			$("input[type='checkbox']").prop("checked",false);
			$("input[type='checkbox']").parent().css("background","url(img/shop/check1.png) no-repeat");
			$(".content .bottom .allcheck .tolpri i").text("￥0");
		}
	})
	$(".addbtn").click(function () {
		var num=parseInt($(this).prev().val());
		num++;
		if(num>99)num=99;
		$(this).prev().val(num);
		var flag=$(this).parent().siblings(".btn").find("input").prop("checked");
		if(flag){
			var pri=parseInt($(this).parent().siblings(".price").find("p").text().split("￥")[1]);
			var tolpri=parseInt($(".content .bottom .allcheck .tolpri i").text().split("￥")[1]);
			var num=parseInt($(this).prev().val());
			tolpri+=pri;
			$(".content .bottom .allcheck .tolpri i").text("￥"+tolpri);
		}
	})
	$(".reducebtn").click(function () {
		var num=parseInt($(this).next().val());
		num--;
		if(num<1){num=1;return;}
		$(this).next().val(num);
		var flag=$(this).parent().siblings(".btn").find("input").prop("checked");
		if(flag){
			var pri=parseInt($(this).parent().siblings(".price").find("p").text().split("￥")[1]);
			var tolpri=parseInt($(".content .bottom .allcheck .tolpri i").text().split("￥")[1]);
			var num=parseInt($(this).next().val());
			tolpri-=pri;
			$(".content .bottom .allcheck .tolpri i").text("￥"+tolpri);
		}
	})
	var vall=1;
	$(".numbtn").focus(function () {
		vall=$(this).val();
	})
	$(".numbtn").blur(function () {
		var val2=$(this).val();
		var ind=val2.indexOf(".");
		var ind2=val2.indexOf("-");
		if(isNaN($(this).val())||$(this).val().substr(0,1)=="0"||$(this).val()==""||ind2!=-1){
			$(this).val(vall);
		}
		if(ind!=-1){$(this).val(val2.substr(0,ind))}
		if(ind==0){$(this).val(1);}
		if($(this).parent().siblings(".btn").find("input").prop("checked")){
			var nn=parseInt($(this).val());
			var pri=parseInt($(this).parent().siblings(".price").find("p").text().split("￥")[1]);
			var tolpri=parseInt($(".content .bottom .allcheck .tolpri i").text().split("￥")[1]);
			var sum=tolpri+(nn-parseInt(vall))*pri;
			$(".content .bottom .allcheck .tolpri i").text("￥"+sum);
		}
	})
})
