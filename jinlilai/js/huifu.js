$(function () {
	//	回复
	reply.onfocus = function() {
		reply1()
	};
	reply.onblur = function() {
		if(reply.value == "") {
			reply.value = "回复中***锡：";
			reply.style.color = "#666666";
		}
	}

	function reply1() {
		if(reply.value == "回复中***锡：") {
			reply.value = "";
			reply.style.color = "#333333";
		}
	}
	/*$('.product_detail .main .left .lun .next').hover(function () {
		$(this).find("img").attr('src','images/product/next2.png');
	},function () {
		$(this).find("img").attr('src','images/product/next1.png');
	})
	$('.product_detail .main .left .lun .prev').hover(function () {
		$(this).find("img").attr('src','images/product/prev2.png');
	},function () {
		$(this).find("img").attr('src','images/product/prev1.png');
	})*/
})