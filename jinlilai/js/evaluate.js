$(function  () {
	$(".evaluate ul li a").click(function () {
		var l=$(this).parent().index();
		var list=$(this).parent().parent().find("li");
		list.find("a").css("background","url(images/shop/xing1.png) no-repeat");
		for(var i=0;i<l+1;i++){
			
			list.eq(i).find('a').css("background","url(images/shop/xing2.png) no-repeat");
		}
	})
	$(".evaluate .evaluate_b div.fr textarea").keyup(function () {
			var l=$(this).val().length;
			$(".evaluate .evaluate_b div.fr p span").text((500-l));
		})
})
