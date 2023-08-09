$(function () {
	$('.header .nav li:first-child').hover(function () {
		$(this).find('dl').stop().slideToggle(500);
	})
	$('.header .nav ul li .on').parent().siblings().not(':first-child').hover(function () {
		$(this).find("a").toggleClass("on");
	})
})
	
