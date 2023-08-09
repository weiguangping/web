$(function(){

	//合作伙伴 选项卡
	$('.lianjie .tab li').click(function() {
        var index = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.tablist').hide().eq(index).fadeIn();
    });
	
	// 用户
	$('.header .loginin span').hover(function(){
		$('.subnav_option.logintop').show();
		$(this).find('i').addClass('arrowon');
	});
	$('.subnav_option.logintop').hover(function(event) {
	},function(){
		$('.header .loginin span').find('i').removeClass('arrowon');
		$(this).hide();
	});
	
	// 各种类型选项卡
	$('.tasktype .choice-lines a').click(function(e){
		e.preventDefault();
		$(this).addClass('on').siblings().removeClass('on');
	});

	// 全部分类
	$('.header .sibarleft h2 a').click(function(){
		$('.header .sibar_main').stop(false,false).slideToggle();
	});
	$(".header .tbody .search .ss button").click(function(){
		location.href="submit_task.html";
	})
});