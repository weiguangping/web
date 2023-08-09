$(function () {
	var vall=0;
	var len=$(".cart_content>ul>li").length;
	var num=0;
	$(".cart_content>ul>li .number .text").focus(function () {
		vall=$(this).val();
	})
	$(".cart_content>ul>li .number .text").blur(function () {
		var val2=$(this).val();
		var ind=val2.indexOf(".");
		var ind2=val2.indexOf("-");
		if(isNaN($(this).val())||$(this).val().substr(0,1)=="0"||$(this).val()==""||ind2!=-1)
		{$(this).val(vall);}
		if(ind!=-1){$(this).val(val2.substr(0,ind))}
		if(ind==0){$(this).val(1);}
		var num=parseInt($(this).val());
		var pri=parseInt($(this).parent().siblings(".price").text());
		var cha=(num-parseInt(vall))*pri;
		var flag=$(this).parent().siblings(".input").find(".check").prop("checked");
		$(this).parent().siblings(".tolpri").text(num*pri+".00");
		var tolpri=parseInt($(".allprice").text());
		if(flag){
			$(".allprice").text(tolpri+cha+".00");
		}
	})
	$(".cart_content>ul>li .number .add").click(function () {
		var val=parseInt($(this).prev().val());
		val++;
		if(val>99)val=99;
		$(this).prev().val(val);
		var pp=parseInt($(this).parent().siblings(".price").text());
		var num=pp*val;
		$(this).parent().siblings(".tolpri").text(num+".00");
		var flag=$(this).parent().siblings(".input").find(".check").prop("checked");
		if(flag){
			var pri=parseInt($(this).parent().siblings(".price").text());
			var tol=parseInt($(".allprice").text());
			var tolpri=tol+pri;
			$(".allprice").text(tolpri+".00");
		}
	})
	$(".cart_content>ul>li .number .reduce").click(function () {
		var val=parseInt($(this).next().val());
		val--;
		if(val<1){val=1;return;}
		$(this).next().val(val);
		var pp=parseInt($(this).parent().siblings(".price").text());
		var num=pp*parseInt(val);
		console.log(num)
		$(this).parent().siblings(".tolpri").text(num+".00");
		var flag=$(this).parent().siblings(".input").find(".check").prop("checked");
		if(flag){
			var pri=parseInt($(this).parent().siblings(".price").text());
			var tol=parseInt($(".allprice").text());
			var tolpri=tol-pri;
			$(".allprice").text(tolpri+".00");
		}
	})
	$(".allcheck").click(function () {
		var flag=$(this).prop("checked");
//		console.log(flag)
		if(flag){
			$(".check").prop("checked",true);
			for(var i=0;i<len;i++){
				var pri=parseInt($(".cart_content>ul>li").eq(i).find(".tolpri").text());
				num+=pri;
			}
			$(".cart_content .button_foot>p i").text(len);
			$(".allprice").text(num+".00");
		}
		else{
			$(".check").prop("checked",false);
			$(".cart_content .button_foot>p i").text(0);
			$(".allprice").text("0.00");
		}
	})
	$(".check").click(function () {
		var flag=$(this).prop("checked");
//		console.log(flag)
		var pri=parseInt($(this).parents(".input").siblings(".tolpri").text());
		var pri2=parseInt($(".allprice").text());
		if(flag){
			var tolpri=pri+pri2;
			$(".allprice").text(tolpri+".00");
		}
		else{
			var tolpri=pri2-pri;
			$(".allprice").text(tolpri+".00");
		}
		var flag=true;
		var che=0;
		for(var i=0;i<len;i++){
			 flag=$(".cart_content>ul>li").eq(i).find(".check").prop("checked");
			if(!flag){
				break;
			}
		}
		for(var i=0;i<len;i++){
			if($(".cart_content>ul>li").eq(i).find(".check").prop("checked")){
				che++;
			}
		}
		$(".cart_content .button_foot>p i").text(che);
		if(!flag){$(".allcheck").prop("checked",false);}
		else{$(".allcheck").prop("checked",true)}
	})
	$(".cart_content>ul>li .operation a").click(function () {
		var flag=$(this).parents().siblings(".input").find(".check").prop("checked");
		if(confirm("你确定要删除么")){
			if(flag){
				var tol=parseInt($(".allprice").text());
				var pri=parseInt($(this).parent().siblings(".tolpri").text());
				var tolpri=tol-pri;
				$(".allprice").text(tolpri+'.00');
			}
			$(this).parents("li").remove();
		}
	})
})
