$(function () {
	var len=$(".content .main div.fl ul li").length;
	var w=$(".content .main div.fl ul li").outerWidth(true);
	var left=(parseInt(len)-4)*parseInt(w);
	var flag=true;
	$(".content .main a.fr").click(function () {
		if(flag){
			if(parseInt($(".content .main div.fl ul").css("margin-left"))>-left){
				flag=false;
				$(".content .main div.fl ul").animate({"marginLeft":"-=130px"},400,function  () {
					flag=true;
				});
			}
		}
	})
	$(".content .main a.fl").click(function () {
		if(flag){
			if(parseInt($(".content .main div.fl ul").css("margin-left"))<0){
				flag=false;
				$(".content .main div.fl ul").animate({"marginLeft":"+=130px"},400,function () {
					flag=true;
				});
			}
		}
	})
	$(".content .main div.fl ul li").mouseover(function () {
		var index=$(this).index();
//		console.log(index);
		$(".content .main div.fl>img").attr("src","img/product/img0"+(parseInt(index)+1)+".jpg")
		$(this).addClass("on").siblings().removeClass("on");
	})
})
