$(function() {
	/*var mySwiper1 = new Swiper('.swiper-container',{
    paginationClickable: true,
    loop: true,
    autoplay : 2000,
    autoplayDisableOnInteraction : false
  	})*/
  	$('.banner .bd').css('left','0');
    $('.center .lun .bd').css('top','0');
    var winW=$(document).width();
    var len=$('.banner .bd li').length;
    var lun=null;
    var index=0;
    var bool=true;
    for(var i=0;i<len;i++)
    {
        $('.banner .bd li').eq(i).css('left',i*winW+'px');
    }
    $('.banner').hover(function () {
    	clearInterval(lun);
    },function () {
    	move();
    })
    move();
    function move(){
        lun=setInterval(function () {
            index++;
            if(index>=len)index=0;
            $('.banner .hd li').eq(index).addClass('on').siblings().removeClass('on');
            $('.banner .bd').stop(false,true).animate({left:-index*winW+'px'},700);
        },2000)
    }
	var timer1 = null;
	var timer2 = null;
	var timer3 = null;
	var index1 = 0;
	var index2 = 0;
	var index3 = 0;
	var bool1 = true;
	var bool2 = true;
	var bool3 = true;
	var listW1 = $(".lunbo1 .center .bd li").width();
	var listW2 = $(".lunbo1 .center .bd li").width();
	var listW3 = $(".lunbo1 .center .bd li").width();
	setweizhi(".lunbo1", listW1);
	show1(".lunbo1", listW1, index1);
	setweizhi(".lunbo2", listW1);
	show2(".lunbo2", listW1, index2);
	setweizhi(".lunbo3", listW1);
	show3(".lunbo3", listW1, index3);

	function setweizhi(name, lisW) {
		var list = $(name + " .center .bd li");
		var listH = list.length;
		for(var i = 0; i < listH; i++) {
			list.eq(i).css('left', i * lisW + 'px');
		}
	}

	function show1(name, listW, index) {
		timer1 = setInterval(function() {
			index++;
			if(index > 2) index = 0;
			$(name + " .hd li").eq(index).addClass("active").siblings().removeClass("active");
			$(name + " .center .bd").stop().animate({
				left: -index * listW + 'px'
			}, 600);
		}, 2000)
	}

	function show2(name, listW, index) {
		timer2 = setInterval(function() {
			index++;
			if(index > 2) index = 0;
			$(name + " .hd li").eq(index).addClass("active").siblings().removeClass("active");
			$(name + " .center .bd").stop().animate({
				left: -index * listW + 'px'
			}, 600);
		}, 2000)
	}

	function show3(name, listW, index) {
		timer3 = setInterval(function() {
			index++;
			if(index > 2) index = 0;
			$(name + " .hd li").eq(index).addClass("active").siblings().removeClass("active");
			$(name + " .center .bd").stop().animate({
				left: -index * listW + 'px'
			}, 600);
		}, 2000)
	}
	$(".lunbo1 .center .hd li").click(function() {
		var a = $(this).index();
		if(bool1) {
			bool1=false;
			$(this).parent().children().removeClass('active').eq(a).addClass('active');
			$('.lunbo1 .center .bd').stop(false, true).animate({
				left: -a * listW1 + 'px'
			}, 700, function() {
				bool1 = true;
			});
			return index1=a;
		}
	})
	$(".lunbo2 .center .hd li").click(function() {
		var a = $(this).index();
		if(bool2) {
			bool2=false;
			$(this).parent().children().removeClass('active').eq(a).addClass('active');
			$('.lunbo2 .center .bd').stop(false, true).animate({
				left: -a * listW2 + 'px'
			}, 700, function() {
				bool2 = true;
			});
			return index2=a;
		}
	})
	$(".lunbo3 .center .hd li").click(function() {
		var a = $(this).index();
		if(bool3) {
			bool3=false;
			$(this).parent().children().removeClass('active').eq(a).addClass('active');
			$('.lunbo3 .center .bd').stop(false, true).animate({
				left: -a * listW3 + 'px'
			}, 700, function() {
				bool3 = true;
			});
			return index3=a;
		}
	})
	$(".lunbo1 .center").mouseover(function () {
		clearInterval(timer1);
	})
	$(".lunbo2 .center").mouseover(function () {
		clearInterval(timer2);
	})
	$(".lunbo3 .center").mouseover(function () {
		clearInterval(timer3);
	})
	$(".lunbo1 .center").mouseout(function () {
		show1(".lunbo1", listW1, index1);
	})
	$(".lunbo2 .center").mouseout(function () {
		show2(".lunbo2", listW2, index2);
	})
	$(".lunbo3 .center").mouseout(function () {
		show3(".lunbo3", listW3, index3);
	})

})