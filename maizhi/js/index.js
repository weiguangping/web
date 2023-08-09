$(function  () {
	$("section .banner>a.prev").hover(function () {
		$(this).find("img").attr("src","img/index/left2.png");
	},function () {
		$(this).find("img").attr("src","img/index/left1.png");
	})
	$("section .banner>a.next").hover(function () {
		$(this).find("img").attr("src","img/index/right2.png");
	},function () {
		$(this).find("img").attr("src","img/index/right1.png");
	})
	//首页banner轮播
    var winW=$("section .banner").width();
    var len=$('.banner li').length;
    var lun=null;
    var index=0;
    var bool=true;
    var num=-(len-2)*parseInt(winW);
    for(var i=0;i<len;i++)
    {
        $('.banner li').eq(i).css('left',i*winW+'px');
    }
    $("section .banner>a.next").click(function () {
    	if(bool){
    		bool=false;
	    	if(parseInt($(".banner ul").position().left)<num){
	    	$(".banner ul li:first-child").appendTo($(".banner ul"));
	    	$(".banner ul").stop(false,true).css({left:num+'px'});
	    	 for(var i=0;i<len;i++)
			    {
			        $('.banner li').eq(i).css('left',i*winW+'px');
			    }
	    	}
	    	$(".banner ul").stop(false,true).animate({left:'-='+winW+'px'},300,function () {
	    		bool=true;
	    	});	
    	}
    })
    $("section .banner>a.prev").click(function () {
    	if(bool){
    		bool=false;
	    	if(parseInt($(".banner ul").position().left)==0){
	    	$(".banner ul li:last-child").prependTo($(".banner ul"));
	    	$(".banner ul").stop(false,true).css({left:'-'+winW+'px'});
	    	 for(var i=0;i<len;i++)
			    {
			        $('.banner li').eq(i).css('left',i*winW+'px');
			    }
	    	}
	    	$(".banner ul").stop(false,true).animate({left:'+='+winW+'px'},300,function  () {
	    		bool=true;
	    	});
	    }
    })
    move();
    function move(){
        lun=setInterval(function () {
           if(parseInt($(".banner ul").position().left)<num){
            	$(".banner ul li:first-child").appendTo($(".banner ul"));
            	$(".banner ul").stop(false,true).css({left:num+'px'});
            	for(var i=0;i<len;i++)
			    {
			        $('.banner li').eq(i).css('left',i*winW+'px');
			    }
            }
            $(".banner ul").stop(false,true).animate({left:'-='+winW+'px'},300);
        },4000)
    }
     $("section .banner").hover(function () {
     	clearInterval(lun);
     	$("section .banner>a.prev").fadeIn(300);
     	$("section .banner>a.next").fadeIn(300);
     },function () {
     	move();
     	$("section .banner>a.prev").fadeOut(300);
     	$("section .banner>a.next").fadeOut(300);
     })
})
