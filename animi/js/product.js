$(function () {
	$(".details_top .left ul li").mouseover(function () {
		var index=$(this).index();
		$(".details_top .left>img").stop(false,true).fadeOut(0);
		$(".details_top .left>img").attr("src","img/details/details0"+(index+1)+".png");
		$(".details_top .left>img").stop(false,true).fadeIn(400);
		$(this).addClass("active").siblings().removeClass("active");
	})
	var ulH=parseInt($(".details_bottom .left>ul").height());
	var liH=parseInt($(".details_bottom .left>ul li").outerHeight(true));
	var val=liH*4;
	var val1=-(ulH-val+6);
	var bool=true;
	$(".details_bottom .left p a.prev").click(function () {
		$(".details_bottom .left p a.next").find("img").css("opacity","1");
		if(parseInt($(".details_bottom .left>ul").css("margin-top"))>=-liH)
		{
			$(this).find("img").css("opacity","0.5");
		}
		if(parseInt($(".details_bottom .left>ul").css("margin-top"))<0){
			if(bool){
				bool=false;
					$(".details_bottom .left>ul").animate({"marginTop":"+="+liH+"px"},400,function () {
					bool=true;
				});
			}
		}
	})
	$(".details_bottom .left p a.next").click(function () {
		$(".details_bottom .left p a.prev").find("img").css("opacity","1");
		if(parseInt($(".details_bottom .left>ul").css("margin-top"))<=(val1+liH))
		{
			$(this).find("img").css("opacity","0.5");
		}
		if(parseInt($(".details_bottom .left>ul").css("margin-top"))>val1){
			if(bool){
				bool=false;
				$(".details_bottom .left>ul").animate({"marginTop":"-="+liH+"px"},400,function () {
					bool=true;
				});
			}
		}
	})
	$(".details_bottom .right .top ul li").click(function () {
		var index=$(this).index();
		$(this).css({"border-top":"2px solid #d62323"}).siblings().css("border-top","1px solid #666666").find("a").css("color","#333333");
		$(this).find("a").css("color","#d62323");
		$(".details_bottom .right .list>div").eq(index).show(0).siblings().hide(0);
	})
	$(".details_top .right ul li .number label .text").focus(function () {
		vall=$(this).val();
	})
	$(".details_top .right ul li .number label .text").blur(function () {
		var val2=$(this).val();
		var ind=val2.indexOf(".");
		var ind2=val2.indexOf("-");
		if(isNaN($(this).val())||$(this).val().substr(0,1)=="0"||$(this).val()==""||ind2!=-1)
		{$(this).val(vall);}
		if(ind!=-1){$(this).val(val2.substr(0,ind))}
		if(ind==0){$(this).val(1);}
	})
	$(".details_top .right ul li .number label .add").click(function () {
		var val=parseInt($(".details_top .right ul li .number label .text").val());
		val++;
		if(val>99)val=99;
		$(".details_top .right ul li .number label .text").val(val);
	})
	$(".details_top .right ul li .number label .reduce").click(function () {
		var val=parseInt($(".details_top .right ul li .number label .text").val());
		val--;
		if(val<1)val=1;
		$(".details_top .right ul li .number label .text").val(val);
	})
	$(".whole_top label").eq(0).find("input").prop("checked",true);
	$("#quan1").prop("checked",true);
	$(".whole_top label").click(function () {
		var index=$(this).index();
		console.log(index)
		$(this).parent().next(".ullist").find("ul").eq(index).show(0).siblings().hide(0);
	})
})
