$(function () {
	var timer=null;
//	$(".main .lists .bottom1").css("display","none");
	$(".sidebar ul>li a").click(function () {
//		alert(12)
	/*	$(".sidebar ul>li>a").css({"box-shadow":"none"});
			$(".sidebar ul>li>a").css({"box-shadow":"none","-moz-box-shadow":"none","-webkit-box-shadow":"none","position":"relative","behavior":"url(css/PIE.htc)"});
		if($(this).next("ol").css("display")=="none"){
			$(this).parent().siblings().find("ol").stop(false,true).slideUp(400);
			$(this).stop(false,true).next("ol").slideDown(400);
			$(this).css({"box-shadow":"0px 5px 9px #2d4765","-moz-box-shadow":"0px 5px 9px #2d4765","-webkit-box-shadow":"0px 5px 9px #2d4765","position":"relative","behavior":"url(css/PIE.htc)"});
			var len=$(".sidebar ul>li").length;
			var h=$(".sidebar ul>li").height();
			var hei=parse
		}
		else{
			$(this).stop(false,true).next("ol").slideUp(400);
			
		}*/
		$(this).parent().siblings().find("ol").slideUp();
		$(this).next("ol").slideToggle();
		$(this).toggleClass("one");
//		alert(12)
//		$(this).css({"background":"#e2e5e8!important","border":"none!important"});
	})
//	var lih=$(".sidebar ul>li").length;
//	$(".sidebar ul>li").eq(lih-1).css("padding-bottom","50px");
	$(".main .tabs li").eq(0).click(function () {
		var index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".main .lists .bottom1").show().siblings().hide();
	})
	$(".main .tabs li").eq(1).click(function () {
		var index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$(".main .lists .bottom2").show().siblings().hide();
	})
	
	/*var winW=$(window).width();
	var winH=$("body").height();
	$(".mask").css("width",winW);
	$(".mask").css("height",winH);*/
	
//	产品列表图片鼠标滑过效果
	/*$(".main>ul li img").hover(function  () {
		$(this).animate({"width":"280px","height":"220px","marginTop":"-3px"})
	},function () {
		$(this).animate({"width":"260px","height":"200px","marginTop":"0px"})
	})*/
	
//	var index=0;
	
	/*$("section .main .right li").mouseover(function () {
		var index=$(this).index();
		$(this).addClass("active").siblings().removeClass("active");
		$("section .main .right>img").attr("src","img/product/bigimg"+(index+1)+".jpg");
	})*/
//	var index=0;
	var num=0;
	$("section .main .right li").click(function () {
		var h=$("section .main .right li").length;
		$(".mask .close a.more").css("display","none");
		var index=$(this).index();
		$(".maskbox .close a.more").css("display","none");
//		console.log(index)
		$(".maskbox .mask>img").attr("src","img/product/pei"+(index+1)+".jpg")
		$(".maskbox .close p").text("产品"+(index+1));
		$(".bg").fadeIn(300);
		$(".maskbox").fadeIn(300);
		$(".mask").stop(false,true).animate({"top":"0px","height":"540px"},{easing:"linear",duration:200}).animate({"width":"700px"},500,"easeOutQuint",function () {
			$(".mask>img").fadeIn(300);
			$(".maskbox .close").delay(500).show(0).animate({"bottom":"0px"},{easing:"easeOutQuint",duration:500});
		});
//		var num=index;
		//大图左右按钮点击
		num=index;
//		console.log(num)
	})
	$(".mask .prev").click(function () {
		if($(".maskbox .close a.more").css("display")=="none"){
			var length=$("section .main .right li").length;
			var name="产品";
		}
		else{
			var length=$(".main .lists .bottom1 li").length;
			var name="配件";
		}
		prevClick(length,name);
	})
	$(".mask .next").click(function () {
		if($(".maskbox .close a.more").css("display")=="none"){
			var length=$("section .main .right li").length;
			var name="产品";
		}
		else{
			var length=$(".main .lists .bottom li").length;
			var name="配件";
		}
		nextClick(length,name);
	})
	
	function nextClick (length,name) {
		pauseClick();
		var h=length;
//		console.log(h)
//		num=$("section .main .right li.active").index();
			num++;
//			console.log(num)
			if(num>h-1){num=h-1;return;}
			$(".maskbox .mask>img").stop(false,true).fadeOut(300);
			$(".maskbox .mask>img").attr("src","img/product/pei"+(num+1)+".jpg");
			$(".maskbox .mask>img").stop(false,true).fadeIn(300);
			$(".maskbox .close p").text(name+(num+1));
	}
	function prevClick (length,name) {
		pauseClick();
		var h=length;
//		console.log(h)
//		num=$("section .main .right li.active").index();
		num--;
//			console.log(num)
			if(num<0){num=0;return;}
			$(".mask>img").stop(false,true).fadeOut(300);
			$(".mask>img").attr("src","img/product/pei"+(num+1)+".jpg");
			$(".mask>img").stop(false,true).fadeIn(300);
		$(".maskbox .close p").text(name+(num+1));
	}
	//关闭弹窗
	$(".bg,.maskbox .close a").click(function () {
		$(".mask").stop(false,true).css({"width":"200px","top":"-100px","height":"330px"});
			$(".maskbox .close").stop(false,true).css({"bottom":"40px"}); 
			$(".maskbox .close").hide();
			$(".maskbox").hide();
			$(".bg").hide();
			$(".mask>img").css("display","none");
			pauseClick();
	})
	$("section .main .right>img").click(function () {
		var h=$("section .main .right li").length;
		$(".mask .close a.more").css("display","none");
		var index=2;
		$(".maskbox .close a.more").css("display","none");
		$(".mask .close p").text("产品3");
		$(".mask .box>img").attr("src","img/product/pei3.jpg")
		$(".bg").fadeIn(300);
		$(".maskbox").fadeIn(300);
		$(".mask").stop(false,true).animate({"top":"0px","height":"540px"},{easing:"linear",duration:200}).animate({"width":"700px"},500,"easeOutQuint",function () {
			$(".mask>img").fadeIn(300);
			$(".maskbox .close").delay(500).show(0).animate({"bottom":"0px"},{easing:"easeOutQuint",duration:500});
		});
		//大图左右按钮点击
		num=index;
	})
	$(".main .lists .bottom li").click(function () {
		var h=$(this).parent().find("li").length;
		$(".maskbox .close a.more").css("display","block");
		var index=$(this).index();
		$(".maskbox .close a.more").css("display","block");
		var val=$(this).find("p").text();
		$(".maskbox .box>img").attr("src","img/product/pei"+(index+1)+".jpg")
		$(".maskbox .close p").text(val);
		$(".bg").fadeIn(300);
		$(".maskbox").fadeIn(300);
		$(".mask").stop(false,true).animate({"top":"0px","height":"540px"},{easing:"linear",duration:200}).animate({"width":"700px"},500,"easeOutQuint",function () {
			$(".mask>img").fadeIn(300);
			$(".maskbox .close").delay(500).show(0).animate({"bottom":"0px"},{easing:"easeOutQuint",duration:500});
		});
		//大图按钮点击
		num=index;
	})
	$(".maskbox .close .play").click(function () {
		if($(".maskbox .close a.more").css("display")=="none"){
			var length=$("section .main .right li").length;
			var name="产品";
		}
		else{
			var length=$(".main .lists .bottom li").length;
			var name="配件";
		}
		playClick (num,length,name);
	})
	$(".maskbox .close .pause").click(function () {
		pauseClick();
	})
//	大图轮播
	function playClick (number,h,name) {
//		console.log(index,h)
			$(".maskbox .close .pause").css("display","block");
			$(".maskbox .close .play").css("display","none");
			timer=setInterval(function () {
				number++;
				num=number;
//				console.log(num)
//				console.log(num,index)
				if(num>h-1){
					num=h-1;
					$(".mask>img").hide();
					$(".maskbox .close .pause").css("display","none");
					$(".maskbox .close .play").css("display","block");
					clearInterval(timer);
					$(".maskbox .close").hide();
					$(".maskbox").hide();
					$(".bg").hide();
					$(".mask").stop(false,true).css({"width":"200px","top":"-100px","height":"330px"});
					$(".maskbox .close").stop(false,true).css({"bottom":"40px"}); 
					return;
				}
			$(".mask>img").stop(false,true).fadeOut(300);
			$(".mask>img").attr("src","img/product/pei"+(num+1)+".jpg");
			$(".mask>img").stop(false,true).fadeIn(300);
			$(".maskbox .close p").text(name+(num+1));
			},3000);
	}
	function pauseClick () {
		clearInterval(timer);
		$(".maskbox .close .pause").css("display","none");
		$(".maskbox .close .play").css("display","block");
	}
	
	
	$(".sidebar ul>li.active ol").css("display","block");
	/*var browser=navigator.appName; 
	var b_version=navigator.appVersion;
	var version=b_version.split(";"); 
	var trim_Version=version[1].replace(/[ ]/g,""); 
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0"){
		$(".sidebar ul>li>a").click(function () {
			$(this).parent().addClass("active").siblings().removeClass("active");
			$(this).parent().addClass("active").siblings().children("a").css("background","#e2e5e8");
		})
	}
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") {
		$(".sidebar ul>li>a").click(function () {
			$(this).parent().addClass("active").siblings().removeClass("active");
			$(this).parent().addClass("active").siblings().children("a").css("background","#e2e5e8");
		})
	}*/
		
	$(".sidebar ul>li ol li a").click(function () {
		var val=$(this).text();
		$("section .list .main .top>h3").text(val);
		$("section .list .main>p a.on").text(val);
	})
})
