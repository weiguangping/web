$(function () {
	var liH=$(".new .new_banner>ul>li").length;
	var liW=$(".new .new_banner>ul>li").width();
	for(var i=0;i<liH;i++){
		$(".new .new_banner>ul>li").eq(i).css("left",liW*i+"px");
	}
	var index=0;
	var timer=null;
	function move() {
		timer=setInterval(function  () {
			index++;
			if(index>liH-1)index=0;
//			console.log(index)
			$(".new .new_banner>ul").animate({"left":(-index*liW)+"px"},300);
			$(".new .new_banner .new_hd li").eq(index).addClass("active").siblings().removeClass("active");
		},2000)
	}
	move();
	$(".new .new_banner .new_hd li").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
		var num=$(this).index();
		$(".new .new_banner>ul").animate({"left":(-num*liW)+"px"},300);
		return index= num;
	})
	$(".new .new_banner").hover(function () {
		clearInterval(timer);
	},function () {
		move();
	})
	var newliW=$(".hot .hot_top .hot_top_banner>ul li").width();;
	var newliH=$(".hot .hot_top .hot_top_banner>ul li").length;
	var boxH=$(".hot").length;
	for(var j=0;j<boxH;j++){
		for(var i=0;i<3;i++){
			$(".hot").eq(j).find(".hot_top_banner>ul li").eq(i).css("left",i*newliW+"px");
		}
	}
	var timer2=null;
	var index2=0;
	var timer3=null;
	var index3=0;
	var timer4=null;
	var index4=0;
	var timer5=null;
	var index5=0;
	var timer6=null;
	var index6=0;
	
	lun2();
	lun3();
	lun4();
	lun5();
	lun6();
	function lun2 () {
		timer2=setInterval(function () {
			index2++;
			if(index2>2)index2=0;
				$(".hot").eq(0).find(".hot_top_banner>ul").animate({"left":(-index2*newliW)+"px"},300);
				$(".hot").eq(0).find(".hot_top_hd li").eq(index2).addClass("active").siblings().removeClass("active");
		},2000)
	}
	function lun3 () {
		timer3=setInterval(function () {
			index3++;
			if(index3>2)index3=0;
				$(".hot").eq(1).find(".hot_top_banner>ul").animate({"left":(-index3*newliW)+"px"},300);
				$(".hot").eq(1).find(".hot_top_hd li").eq(index3).addClass("active").siblings().removeClass("active");
		},2000)
	}
	function lun4 () {
		timer4=setInterval(function () {
			index4++;
			if(index4>2)index4=0;
				$(".hot").eq(2).find(".hot_top_banner>ul").animate({"left":(-index4*newliW)+"px"},300);
				$(".hot").eq(2).find(".hot_top_hd li").eq(index4).addClass("active").siblings().removeClass("active");
		},2000)
	}
	function lun5 () {
		timer5=setInterval(function () {
			index5++;
			if(index5>2)index5=0;
				$(".hot").eq(3).find(".hot_top_banner>ul").animate({"left":(-index5*newliW)+"px"},300);
				$(".hot").eq(3).find(".hot_top_hd li").eq(index5).addClass("active").siblings().removeClass("active");
		},2000)
	}
	function lun6 () {
		timer6=setInterval(function () {
			index6++;
			if(index6>2)index6=0;
				$(".hot").eq(4).find(".hot_top_banner>ul").animate({"left":(-index6*newliW)+"px"},300);
				$(".hot").eq(4).find(".hot_top_hd li").eq(index6).addClass("active").siblings().removeClass("active");
		},2000)
	}
		$(".hot_top_hd li").click(function () {
			var shu=$(this).index();
			var j=$(this).parents(".hot").index();
			liClick(j,shu);
		})
	function liClick(i,shu){
		$(".hot").eq(i).find(".hot_top_hd li").eq(shu).addClass("active").siblings().removeClass("active");
		$(".hot").eq(i).find(".hot_top_banner>ul").animate({"left":(-shu*newliW)+"px"},300);
		switch(i){
			case 0:return index2= shu;break;
			case 1:return index3= shu;break;
			case 2:return index4= shu;break;
			case 3:return index5= shu;break;
			case 4:return index6= shu;break;
		}
		
	}
	$(".hot_top_banner").hover(function () {
		var index=$(this).parents(".hot").index();
		if(index==0){clearInterval(timer2);}
		if(index==1){clearInterval(timer3);}
		if(index==2){clearInterval(timer4);}
		if(index==3){clearInterval(timer5);}
		if(index==4){clearInterval(timer6);}
	},function () {
		var index=$(this).parents(".hot").index();
		if(index==0){lun2();}
		if(index==1){lun3();}
		if(index==2){lun4();}
		if(index==3){lun5();}
		if(index==4){lun6();}
	})
	/*$(".hot").eq(0).find(".hot_top_banner").mouseover(function () {
		clearInterval(timer2);
		console.log(12)
	})*/
	var timer7=null;
	var index7=0;
	var lastW=$(".raiders_banner>ul li").width();
	var lastH=$(".raiders_banner>ul li").length;
	for(var i=0;i<lastH;i++){
		$(".raiders_banner>ul li").eq(i).css("left",i*lastW+"px");
	}
	function lun7 () {
		timer7=setInterval(function () {
			index7++;
			if(index7>2)index7=0;
				$(".raiders_banner>ul").animate({"left":(-index7*lastW)+"px"},300);
				$(".raiders_banner .raiders_banner_hd li").eq(index7).addClass("active").siblings().removeClass("active");
		},2000)
	}
	lun7();
	$(".raiders_banner .raiders_banner_hd li").click(function () {
		$(this).addClass("active").siblings().removeClass("active");
		var index=$(this).index();
		$(".raiders_banner>ul").animate({"left":(-index*lastW)+"px"},300);
	})
	$(".raiders_banner").hover(function () {
		clearInterval(timer7);
	},function () {
		lun7();
	})
})
