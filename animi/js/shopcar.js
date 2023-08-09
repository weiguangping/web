$(function () {
	$(".container  li div.num .text").focus(function () {
		vall=$(this).val();
	})
	$(".container  li div.num .text").blur(function () {
		var val2=$(this).val();
		var ind=val2.indexOf(".");
		var ind2=val2.indexOf("-");
		if(isNaN($(this).val())||$(this).val().substr(0,1)=="0"||$(this).val()==""||ind2!=-1)
		{$(this).val(vall);}
		if(ind!=-1){$(this).val(val2.substr(0,ind))}
		if(ind==0){$(this).val(1);}
		var pri=parseInt($(this).parent().siblings(".price").find("p").text());
		var tolpri=parseInt($(this).val());
		tolpri*=pri;
		$(this).parent().siblings(".tolpri").find("p").text(tolpri+".00")
		getTolpri();
	})
	$(".container  li div.num .add").click(function () {
		var val=parseInt($(this).prev().val());
		val++;
		if(val>99)val=99;
		$(this).prev().val(val);
		var pri=parseInt($(this).parent().siblings(".price").find("p").text());
		var tolpri=parseInt($(this).prev().val());
		tolpri*=pri;
		$(this).parent().siblings(".tolpri").find("p").text(tolpri+".00")
		getTolpri();
	})
	$(".container  li div.num .reduce").click(function () {
		var val=parseInt($(this).next().val());
		val--;
		if(val<1)val=1;
		$(this).next().val(val);
		var pri=parseInt($(this).parent().siblings(".price").find("p").text());
		var tolpri=parseInt($(this).next().val());
		tolpri*=pri;
		$(this).parent().siblings(".tolpri").find("p").text(tolpri+".00")
		getTolpri();
	})
	var sum=0;
	var tolNum=0;
	$(".allcheck").click(function () {
		var flag=$(this).prop("checked");
		$(".checked,.allcheck").prop("checked",flag);
		$(".checked").prop("checked",flag);
		tolNum=$(".container li").length;
		if(flag){
			$(".container .mg .bottom .number span").text(tolNum);
		}
		else{
			$(".container .mg .bottom .number span").text(0);
		}
		getTolpri();
	})
	var zongjia=0;
	function getTolpri() {
		zongjia=0;
		for(var i=0;i<$(".container  li").length;i++){
			if($(".container  li").eq(i).find(".checked").prop("checked")){
				var pri=parseInt($(".container  li").eq(i).find("div.tolpri p").text());
			zongjia+=pri;
			}
		}
		$(".container .mg .bottom .subtotal i").text(zongjia);
	}
	var bool=true;
	$(".checked").click(function () {
		var flag=$(this).prop("checked");
		if(flag){
			tolNum++;
			$(".container .mg .bottom .number span").text(tolNum);
		}
		else{
			tolNum--;
			$(".container .mg .bottom .number span").text(tolNum);
		}
		for(var i=0;i<$(".container  li").length;i++){
			bool=$(".container  li").eq(i).find(".checked").prop("checked")
			if(!bool){
				break;
			}
			
		}
		if(!bool){
			$(".allcheck").prop("checked",false);
		}
		else{
			$(".allcheck").prop("checked",true);
		}
		getTolpri();
	})
	$(".del").click(function () {
		var index=$(this).parents("li").index();
		if(confirm("您确定要删除么")){
			$(".container  li").eq(index).remove();
		}
		for(var i=0;i<$(".container  li").length;i++){
			bool=$(".container  li").eq(i).find(".checked").prop("checked")
			if(!bool){
				break;
			}
			
		}
		if(!bool){
			$(".allcheck").prop("checked",false);
		}
		else{
			$(".allcheck").prop("checked",true);
		}
		getTolpri();
	})
	var delnum=0;
	var arr=[];
	$(".seldel").click(function () {
		delnum=0;
		arr=[];
		for(var i=0;i<$(".container li").length;i++){
			if($(".container  li").eq(i).find(".checked").prop("checked")){
				delnum++;
				arr.push($(".container  li").eq(i).attr("id"));
			}
		}
		if(delnum==0){
			alert("请选择你要删除的商品");
			return;
		}
		if(confirm("您确定要删除选择的商品么?")){
			for(var j=0;j<arr.length;j++){
				$(".container li#"+arr[j]).remove();
			}
			$(".allcheck").prop("checked",false);
		}
		getTolpri();
		$(".container .mg .bottom .number span").text(0);
	})
	
})
