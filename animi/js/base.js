$(function () {
	$(".header .nav .lei p").click(function () {
		$(this).next("ul").stop(false,true).slideToggle();
	})
})
