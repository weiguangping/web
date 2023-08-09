$(function () {
	var link=window.location.hash;
	if(link=="#contact"){
		$(".sidebar ul>li").eq(2).addClass("active").siblings().removeClass("active");
		$("section .list .main").eq(2).css("display","block").siblings().css("display","none");
	}
	$("header .right .contact").click(function () {
		$(".sidebar ul>li").eq(2).addClass("active").siblings().removeClass("active");
		$("section .list .main").eq(2).css("display","block").siblings().css("display","none");
	})
})
