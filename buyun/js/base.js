$(window).load(function() {
//	首页产品中心轮播
  var mySwiper = new Swiper('.swiper-container',{
    paginationClickable: true,
    loop: true,
    autoplay : 2000,
    autoplayDisableOnInteraction : false
  })
  var imgh=$('.swiper-container1 img').height();
//console.log(imgh);
  $('.swiper-container1').css('height',imgh+'px');
  var mySwiper1 = new Swiper('.swiper-container1',{
    paginationClickable: true,
    loop: true,
    autoplay : 2000,
    autoplayDisableOnInteraction : false
  })

		var li=$('#myCarousel1 .carousel-inner ul li');
		var liw=li.width();
		var lih=li.length;
		var index=0;
		var num=0;
      	
// 首页产品轮播
		
	var scrw=$(window).outerWidth()+17;
		var timer=null;
		var nn=0;
		var bool=true;
	function show1 () {
		timer=setInterval(function () {
       		if(parseInt($('#myCarousel1 .carousel-inner ul').css('margin-left'))<=-498)
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"0px"},700,"swing");
		}
		else
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"-=249px"},700,"swing");
		}
       	},2000)
	}
	function show2 () {
		timer=setInterval(function () {
       		if(parseInt($('#myCarousel1 .carousel-inner ul').css('margin-left'))<=-807)
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"0px"},700,"swing");
		}
		else
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"-=269px"},700,"swing");
		}
       	},2000)
	}
	function show3 () {
		timer=setInterval(function () {
			if(parseInt($('#myCarousel1 .carousel-inner ul').css('margin-left'))<=-1156)
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"0px"},700,"swing");
		}
		else
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"-=289px"},700,"swing");
		}
		},2000)
	}
	if(scrw>1199){
	for(var i=0;i<lih;i++)
       	{
       		li.eq(i).css('left',liw*i+i*30+'px')
       	}
       	
	}
	if(scrw<1200&&scrw>991)
	{
		for(var i=0;i<lih;i++)
       	{
       		li.eq(i).css('left',liw*i+i*50+'px')
       	}
       	
	}
	else if(scrw<992&&scrw>767)
	{
		for(var i=0;i<lih;i++)
       	{
       		li.eq(i).css('left',liw*i+i*70+'px')
       	}
       	
	}
	$('.carousel-indicators .prev').click(function () {
		clearInterval(timer);
		if(bool)
		{	
			bool=false;
			if(scrw>1199)
		{
			if(parseInt($('#myCarousel1 .carousel-inner ul').css('margin-left'))<=-498)
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"0px"},700,"swing",function () {
				bool=true;
			});
		}
		else
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"-=249px"},700,"swing",function () {
				bool=true;
			});
		}
		}
		if(scrw>991&&scrw<1200)
		{
				if(parseInt($('#myCarousel1 .carousel-inner ul').css('margin-left'))<=-807)
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"0px"},700,"swing",function () {
				bool=true;
			});
		}
		else
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"-=269px"},700,"swing",function () {
				bool=true;
			});
		}
		}
		if(scrw>767&&scrw<992)
		{
				if(parseInt($('#myCarousel1 .carousel-inner ul').css('margin-left'))<=-1156)
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"0px"},700,"swing",function  () {
				bool=true;
			});
		}
		else
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"-=289px"},700,"swing",function  () {
				bool=true;
			});
		}
		}
		}
	})
	$('.index_product .main').mouseover(function() {
			clearInterval(timer);
		})
	$('.index_product .main').mouseout(function() {
			if(scrw>1199){show1();return;};
			if(scrw<1200&&scrw>991){show2();return;};
			if(scrw<992&&scrw>767){show3();return;};
		})
	
	$('.carousel-indicators .next').click(function () {
		clearInterval(timer);
		if(bool)
		{
			bool=false;
			if(scrw>1199){
		if(parseInt($('#myCarousel1 .carousel-inner ul').css('margin-left'))>=0)
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"-498px"},700,"swing",function  () {
				bool=true;
			});
		}
		else
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"+=249px"},700,"swing",function () {
				bool=true;
			});
		}
		}
		if(scrw>991&&scrw<1200){
		if(parseInt($('#myCarousel1 .carousel-inner ul').css('margin-left'))>=0)
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"-807px"},700,"swing",function () {
				bool=true;
			});
		}
		else
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"+=269px"},700,"swing",function () {
				bool=true;
			});
		}
		}
		if(scrw>767&&scrw<992){
		if(parseInt($('#myCarousel1 .carousel-inner ul').css('margin-left'))>=0)
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"-1156px"},700,"swing",function () {
				bool=true;
			});
		}
		else
		{
			$('#myCarousel1 .carousel-inner ul').stop().animate({'margin-left':"+=289px"},700,"swing",function () {
				bool=true;
			});
		}
		}
		}
		
	})
//	产品详情
$('.product_detail .right .prev').click(function  () {
	var index=$('.product_detail .right input').val();
	index++
	$('.product_detail .right input').val(index);
})
$('.product_detail .right .next').click(function  () {
	var index=$('.product_detail .right input').val();
	index--;if(index<1)index=1;
	$('.product_detail .right input').val(index);
})
$('.product_detail .right .size').click(function(){
	$(this).css('border','1px solid red').siblings('.size').css('border','none');
})
	var w2 = $(window).width()+17;
	$('.product_detail .img6').click(function() {
		$('.product_detail img').css('border', '1px solid white');
		$(this).css('border', '1px solid red');
		$('.product_detail .img5').css('border', '1px solid red');

	})
	$('.product_detail .img7').click(function() {
			$('.product_detail img').css('border', '1px solid white');
			$(this).css('border', '1px solid red');
			$('.product_detail .img1').css('border', '1px solid red');

		})
		// banner轮播
	$('#identifier').carousel({
		interval: 2000
	});
	$("#myCarousel").carousel('cycle');
	//	confirm_order点击
	$('.shop_car .adress .big1').click(function() {
		$(this).toggleClass('check4');
	})
	$('.content .shop_car a.check').click(function() {
		if ($(this).hasClass('check2')) {
			$(this).removeClass('check2');
			$(this).css("background", "url('images/shop/check1.png') no-repeat");
			var in1=$(this).parent().parent().find('.price').text().split("¥ ");
			var in2=in1[1]*$(this).parent().parent().find('.num').val();
//			console.log(in2);
			var qian2=parseInt($('.shop_car .bottom .right1 .allprice').text());
			var qian3=parseInt($('.shop_car .bottom .price2').text());
			qian2-=in2;
			qian3-=in2;
			$('.shop_car .bottom .right1 .allprice').text(qian2+".00");
			$('.shop_car .bottom .xinxi .price1').text(qian3+".00");	
		$('.shop_car .bottom .xinxi .price2').text(qian3+".00");	
			
		} else {
			$(this).addClass('check2');
			$(this).css("background", "url('images/shop/check2.png') no-repeat");
			var in1=$(this).parent().parent().find('.price').text().split("¥ ");
			var in2=in1[1]*$(this).parent().parent().find('.num').val();
//			console.log(in2);
			var qian2=parseInt($('.shop_car .bottom .right1 .allprice').text());
			var qian3=parseInt($('.shop_car .bottom .price2').text());
			qian2+=in2;
			qian3+=in2;
			$('.shop_car .bottom .right1 .allprice').text(qian2+".00");
			$('.shop_car .bottom .xinxi .price1').text(qian3+".00");	
		$('.shop_car .bottom .xinxi .price2').text(qian3+".00");	
		}
	})
	$('.shop_car .bottom .all').click(function() {
			if ($(this).hasClass('check2')) {
				$(this).removeClass('check2');
				$('.content .shop_car a.check').removeClass('check2');
				$(this).css("background", "url('images/shop/check1.png') no-repeat");
				$('.content .shop_car a.check').css("background", "url('images/shop/check1.png') no-repeat");
				$('.shop_car .bottom .right1 .allprice').text("0.00");
			} else {
				$(this).addClass('check2');
				$(this).css("background", "url('images/shop/check2.png') no-repeat");
				$('.content .shop_car a.check').addClass('check2');
				$('.content .shop_car a.check').css("background", "url('images/shop/check2.png') no-repeat");
				var a1=a.find('.price').text().split("¥ ");
		var a2=0;
		qian=0;
		for(var i=0;i<ah;i++)
		{
			a2=parseInt(a1[i+1])*a.eq(i).find('.num').val();
			qian+=a2;
		}
		$('.shop_car .bottom .right1 .allprice').text(qian+".00");
			}
		})
		//加减
		var a=$('.shop_car .row');
		var ah=a.length;
		var qian=0;
//		console.log(ah);
	$('.content .shop_car .main .jian').click(function() {
		qian=0;
		var index = $(this).next().val();
		index--;
		if (index < 1) index = 1;
		$(this).next().val(index);
		if($(this).parent().siblings().find('a.check').hasClass('check2')){
		var a1=a.find('.price').text().split("¥ ");
		var a2=0;
		for(var i=0;i<ah;i++)
		{
			a2=parseInt(a1[i+1])*a.eq(i).find('.num').val();
			qian+=a2;
		}
		$('.shop_car .bottom .right1 .allprice').text(qian+".00");
		$('.shop_car .bottom .xinxi .price1').text(qian+".00");	
		$('.shop_car .bottom .xinxi .price2').text(qian+".00");	
		}
	})
	$('.content .shop_car .main .jia').click(function() {
			qian=0;
			var index = $(this).prev().val();
			index++;
			$(this).prev().val(index);
			if($(this).parent().siblings().find('a.check').hasClass('check2')){
			var a1=a.find('.price').text().split("¥ ");
		var a2=0;
		for(var i=0;i<ah;i++)
		{
			a2=parseInt(a1[i+1])*a.eq(i).find('.num').val();
			qian+=a2;
		}
		$('.shop_car .bottom .right1 .allprice').text(qian+".00");
		$('.shop_car .bottom .xinxi .price1').text(qian+".00");
		$('.shop_car .bottom .xinxi .price2').text(qian+".00");	
		}
		})
		//刷新页面
		/*$(window).resize(function(){
			location.reload();
		})*/
	if (w2<768) {
		//	user 下拉
		$('.user .left .left1').click(function() {
			$('.user .left .clearpd .one').stop().slideToggle(600);
			$('.user .left .clearpd ul').css('display', 'none');
			$('.user .left .clearpd').css('display', 'block');
			bool=false;
		})
		$('.user .left .clearpd .one').click(function() {
			$(this).next().next().stop().slideToggle(600).parent().siblings().find('ul').slideUp(600);
		})
	}
	// 	注册
	
	var w3 = $('.form_regit').width();
	//	console.log(w2)
	if (w2 < 768 && w2 > 562) {
		$('.form_regit').css({
			marginLeft: -w3 / 2 + "px",
			left: "50%"
		});
	} else if (w2 <= 562)
		$('.form_regit').css({
			left: "0",
			marginLeft: "0"
		});
		var n=0;
	$(window).resize(function() {
		var w2 = $(window).width()+17;
		if(w2>=768){location.reload();}
		var w3 = $('.form_regit').width();
		if (w2 < 768 && w2 > 562) {
			$('.form_regit').css({
				marginLeft: -w3 / 2 + "px",
				left: "50%"
			});
		} else if (w2 <= 562)
			$('.form_regit').css({
				left: "0",
				marginLeft: "0"
			});
		/*if (w2 < 1200) {
			var h = $('.index_about .main img').height();
			$('.index_about .main .text').css('max-height', h + 15 + 'px');
		} else $('.index_about .main .text').css('max-height', '');
		if (w2 > 767) {
			$('.user .left .clearpd ul').css('display', 'block');
			$('.user .left .clearpd .one').css('display', 'block');
		}*/
	})
	$('.header .nav1 li').hover(function () {
		$(this).find('a').eq(0).css({"background":"#eeeeee","color":"black"});
//		$(this).find('ol').stop().slideDown(400);
	},function () {
		$(this).find('a').eq(0).css({"background":"black","color":"white"});
//		$(this).find('ol').stop().slideUp(400);
	})
	$('.nav_toggle').click(function() {
		$('.header_nav1').stop().slideToggle();
	})
	/*$('.header_nav1 li .on').click(function() {
		//$('.nav_bar li dl').stop(false,true).slideUp(1000);
		$(this).css('background','blue').parent().siblings().find('.on').css('background','deepskyblue');
		$(this).next().stop(false, true).slideToggle(700).parent().siblings().find('dl').stop(false, true).slideUp(700);
	})*/
	var w = $(document).width();
	/*if (w < 1200) {
		var h = $('.index_about .main img').height();
		$('.index_about .main .text').css('max-height', h + 17 + 'px');
	} else {
		$('.index_about .main .text').css('max-height', '');
	}*/

	

})