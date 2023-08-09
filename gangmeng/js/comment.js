$(function () {
	$(".details .right_content .content_score .degree_top>ul>li").click(function  () {
		var index=$(this).index();
		$(".details .right_content .content_score .ul").eq(index).show().siblings(".ul").hide();
	})
	$(".wuxingp ol li img").click(function () {
		var index=$(this).parent().index();
		var prindex=$(this).parent().parent().parent().index();
		var len=$(this).parent().length;
//		console.log(index)
		$(".wuxingp ul>li").eq(prindex).find("ol li img").attr("src","img/order/wuxing2.png");
		for(var i=0;i<=index;i++){
			$(".wuxingp ul>li").eq(prindex).find("ol li").eq(i).find("img").attr("src","img/order/wuxing3.png");
		}
	})
})
