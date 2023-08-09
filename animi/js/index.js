$(function  () {
	$(document).ready(function(){
		$(".banner .hd li").eq(0).addClass("on");
		var winW=$(document).width();
		var a=0;
		var num=$(".banner .bd li").length;
		var bool=true;
		for(var i=0;i<num;i++){
			$(".banner .bd li").eq(i).css({"left":winW*i+"px"});
		}
		$(".banner .hd li").click(function(){
			$(this).addClass("on").siblings().removeClass("on")
			var len=$(this).index();
			$(".banner .bd").stop(false,true).animate({left:-winW*len+"px"},700);
			return a=len;
		})
		$(".banner .next").click(function(){
			var ingA=$(".banner .hd li.on")
			var ing=ingA.index();
				if(bool){
					bool = false;
					if(ing<2){
					$(".banner .hd li").eq(ing).removeClass("on");
					$(".banner .hd li").eq(ing+1).addClass("on");
					$(".banner .bd").stop(false,true).animate({left:-winW*(ing+1)+"px"},700,function(){bool=true;});
				}else if(ing>=2){
					ing=0;
					$(".banner .hd li").eq(ing).addClass("on").siblings().removeClass("on");
					$(".banner .bd").stop(false,true).animate({left:-winW*ing+"px"},700,function(){bool=true;});
				}
			}
			
		})
		$(".banner .prev").click(function(){
			var ingA=$(".banner .hd li.on")
			var ing=ingA.index();
			if(bool){
				bool=false;
				if(ing>0){
				$(".banner .hd li").eq(ing).removeClass("on");
				$(".banner .hd li").eq(ing-1).addClass("on");
				$(".banner .bd").stop(false,true).animate({left:-winW*(ing-1)+"px"},700,function(){bool=true;});
			}else if(ing<=0){
				ing=2;
				$(".banner .hd li").eq(ing).addClass("on").siblings().removeClass("on");
				$(".banner .bd").stop(false,true).animate({left:-winW*ing+"px"},700,function(){bool=true;});
			}
			return a=ing;
			}
		})
		$(".banner").mouseover(function(){
			clearInterval(lun);
		})
		$(".banner").mouseout(function(){
			show();
		})
		function show(){
			lun=setInterval(function(){
				a=a+1;
				if(a>=num){
					a=0;
				}
				$(".banner .bd").stop(false,true).animate({left:-winW*a+"px"},700);
				$(".banner .hd li").eq(a).addClass("on").siblings().removeClass("on");
			},3000)
		}
		show();
		})
//	banner结束
})
