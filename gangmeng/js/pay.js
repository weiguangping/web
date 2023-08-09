$(function () {
	$(".mode .confirm .password>div>input").eq(0).focus();
	$(".mode .confirm .password>div>input").keyup(function (e) {
		var index=$(this).index();
		$(this).next().focus();
		if(e.keyCode==8){
			if($(".mode .confirm .password>div>input").val().length==0){
			$(".mode .confirm .password>div>input").eq(0).focus();
			}
			else{
				$(this).prev().focus();
			}
		}
	})
	$(".details .left_title>span+span").click(function () {
		$(this).next("ul").slideToggle();
	})
	$(".content_top .banner_order .bottom .banner>ul>li").mouseover(function () {
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		$(".content_top .banner_order .top>img").attr("src","img/order/bigimg"+(index+1)+".png");
})
	var bool=true;
	$(".content_top .banner_order .bottom>a.right").click(function () {
		if(parseInt($(".content_top .banner_order .bottom .banner>ul").css("margin-left"))>-216)
		{
			if(bool){bool=false;
			$(".content_top .banner_order .bottom .banner>ul").animate({"marginLeft":"-=108px"},400,function () {
				bool=true;
			});
			}
		}
	})
	$(".content_top .banner_order .bottom>a.left").click(function () {
		if(parseInt($(".content_top .banner_order .bottom .banner>ul").css("margin-left"))<0){
			if(bool){
				bool=false;
				$(".content_top .banner_order .bottom .banner>ul").animate({"marginLeft":"+=108px"},400,function () {
				bool=true;
			});
			}
		}
	})
	$(".content_top .middle_text .choice .add_and_subtract .add").click(function () {
		var val=parseInt($(this).prev().val());
		val++;
		if(val>99)val=99;
		$(this).prev().val(val);
	})
	$(".content_top .middle_text .choice .add_and_subtract .reduce").click(function () {
		var val=parseInt($(this).next().val());
		val--;
		if(val<1){val=1;return;}
		$(this).next().val(val);
	})
	$(".content_top .middle_text .choice .add_and_subtract .text").focus(function () {
		vall=$(this).val();
	})
	$(".content_top .middle_text .choice .add_and_subtract .text").blur(function () {
		var val2=$(this).val();
		var ind=val2.indexOf(".");
		var ind2=val2.indexOf("-");
		if(isNaN($(this).val())||$(this).val().substr(0,1)=="0"||$(this).val()==""||ind2!=-1)
		{$(this).val(vall);}
		if(ind!=-1){$(this).val(val2.substr(0,ind))}
		if(ind==0){$(this).val(1);}
	})
	$(".details .right_content .content_score .degree_top>ul>li").click(function () {
		var index=$(this).index();
		$(".ullist").find(".ul").eq(index).show().siblings().hide();	
		console.log(index)
	})
})
