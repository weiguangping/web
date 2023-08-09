$(function () {
	$(".allcheck,.checked").prop("checked",true);
	var bool=true;
	$(".allcheck").click(function () {
		var flag=$(this).prop("checked");
		$(".checked").prop("checked",flag);
		getTolpri();
	})
	$(".checked").click(function () {
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
	var zongjia=0;
	function getTolpri() {
		zongjia=0;
		for(var i=0;i<$(".container  li").length;i++){
			if($(".container  li").eq(i).find(".checked").prop("checked")){
				var pri=parseInt($(".container  li").eq(i).find("div.tolpri p").text());
			zongjia+=pri;
			}
		}
		$(".container .mg .bottom .right p span").text(zongjia+".00");
	}
})
