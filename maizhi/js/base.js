$(function () {
	 if( !('placeholder' in document.createElement('input')) ){   
    $('input[placeholder],textarea[placeholder]').each(function(){    
      var that = $(this),    
      text= that.attr('placeholder');    
      if(that.val()===""){    
        that.val(text).addClass('placeholder');    
      }    
      that.focus(function(){    
        if(that.val()===text){    
          that.val("").removeClass('placeholder');    
        }    
      })    
      .blur(function(){    
        if(that.val()===""){    
          that.val(text).addClass('placeholder');    
        }    
      })    
      .closest('form').submit(function(){    
        if(that.val() === text){    
          that.val('');    
        }    
      });    
    });    
  }   
	/*   $('a').css('outline','none');
    $('a').css('border','0');*/
	//侧边栏
	$(".sidebar ul>li").click(function () {
			var index=$(this).index();
			if(index==1){
				$("section .sidebar").css("height","552px");
			}
			else{
				$("section .sidebar").css("height","771px");
			}
			$(this).addClass("active").siblings().removeClass("active");
			$("section .list .main").eq(index).show().siblings().hide();
		})
	$(".sidebar ul>li").hover(function () {
		$(this).find("span").stop(false,true).animate({"right":"0px"},300);
	},function () {
		$(this).find("span").stop(false,true).animate({"right":"-9px"},300);
	})
	/*$(".sidebar ul>li>a").hover(function () {
		console.log(12)
		$(this).animate({"backgroundColor":"green"},500);
	},function () {
		$(this).animate({"background":"#e2e5e8","color":"#333333","border-right":"none"},500);
	})*/
	$(".sidebar ul>li ol li a").click(function () {
		$(".sidebar ul>li ol li a").removeClass("on");
		$(this).addClass("on");
	})
	
	$(".rightsead li>div").hover(function () {
		$(this).stop(false,true).animate({"right":"0px"},400);
	},function () {
		$(this).stop(false,true).animate({"right":"-102px"},400);
	})
	$(".rightsead li").eq(1).click(function () {
		$("html,body").animate({"scrollTop":0},700);
	})
	/*$(".sidebar ul>li").hover(function () {
		if($(this).find("a").css("color")!="rgb(10, 67, 144)"||$(this).find("a").css("color")!="#0a4390"){
			$(this).find("a").css({"border-right":"9px solid #ffae00","background":"#f1f2f4","color":"#0a4390"});
		}
	},function () {
		$(this).find("a").css({"border-right":"none","background":"#e2e5e8","color":"#333333"});
	})*/
	
	$("header .right a").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
	})
	
	/*var browser=navigator.appName 
	var b_version=navigator.appVersion 
	var version=b_version.split(";"); 
	var trim_Version=version[1].replace(/[ ]/g,""); 
	if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE6.0") 
	{ 
//	alert("IE 6.0"); 
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE7.0") 
	{ 
//	alert("IE 7.0"); window.location.href="http://xxxx.com";
			$(".sidebar ul>li").click(function () {
				var index=$(this).index();
				var num=Math.floor(index/2);
				if(num==1){
					$("section .sidebar").css("height","552px");
				}
				else{
					$("section .sidebar").css("height","771px");
				}
				$(this).addClass("active").siblings().removeClass("active");
				$("section .list .main").eq(num).show().siblings().hide();
			})
	} 
	else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") 
	{ 
//	alert("IE 8.0"); 
	$(".sidebar ul>li").click(function () {
				var index=$(this).index();
				var num=Math.floor(index/2);
				if(num==1){
					$("section .sidebar").css("height","552px");
				}
				else{
					$("section .sidebar").css("height","771px");
				}
				$(this).addClass("active").siblings().removeClass("active");
				$("section .list .main").eq(num).show().siblings().hide();
			})
	} 
	else
	{ 
//	alert("IE 9.0"); 
	$(".sidebar ul>li").click(function () {
			var index=$(this).index();
			if(index==1){
				$("section .sidebar").css("height","552px");
			}
			else{
				$("section .sidebar").css("height","771px");
			}
			$(this).addClass("active").siblings().removeClass("active");
			$("section .list .main").eq(index).show().siblings().hide();
		})
	} */
//	alert(window.location.pathname)
	/*$(".contact").click(function () {
		location.href="about.html";
		setTimeout(function () {
			$(".sidebar ul>li").eq(2).addClass("active").siblings().removeClass("active");
			alert(1212)
		},300)
	})*/
})
$(window).ready(function () {
	var htmlW=$("html").height();
	var winH=$(window).height();
	var winW=$(window).width();
	if(winH>htmlW){
		var ww=parseInt(htmlW-200);
		$(".rightsead").css({"top":ww+"px","bottom":"auto"});
	}
	else if(parseInt(winW)>1100){
		$(".rightsead").css({"bottom":"100px","top":"auto"});
	}
	else{
		var ww=parseInt(winH-100);
		$(".rightsead").css({"top":ww+"px","bottom":"auto"});
	}
	
})
