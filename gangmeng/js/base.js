$(function () {
	$(".top .top_bottom .content .span").click(function () {
		$(".top .top_bottom .content .ul_down").slideToggle();
	})
	$(".top .top_top .content .ul_right>li").hover(function () {
		$(this).find("ol").slideToggle();
	})
})
