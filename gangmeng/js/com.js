$(function () {
	$(".cart_content>ul>li .number .add").click(function () {
		var pri=parseInt($(this).parent().siblings(".price").text());
		var tol=parseInt($(".allprice").text());
		var tolp=tol+pri;
		$(".allprice").text(tolp+".00");
	})
	$(".cart_content>ul>li .number .reduce").click(function () {
		var pri=parseInt($(this).parent().siblings(".price").text());
		var tol=parseInt($(".allprice").text());
		var tolp=tol-pri;
		$(".allprice").text(tolp+".00");
	})
	$(".cart_content>ul>li .number .text").blur(function () {
		var sum=0;
		for(var i=0;i<$(".cart_content>ul>li").length;i++){
			sum+=parseInt($(".cart_content>ul>li").eq(i).find(".tolpri").text());
		}
		console.log(sum)
		$(".allprice").text(sum+".00");
	})
})
