$(function () {
//	选项
	$('.message .right .msgb ul .one div input').click(function () {
		var flag=$(this).prop("checked");
//		console.log(flag)
		if(flag){
			$(this).parent().css({"background":"url('images/shop/check6.png')"})
		}
		else{
			$(this).parent().css({"background":"url('images/shop/check5.png')"})
		}
	})
	
	$('.yzm').text(generateMixed(4));
//	$('.yzm').css({"letter-spacing":"4px"});
	$('.yzm').click(function () {
				$(this).text(generateMixed(4));
//				$(this).css({"letter-spacing":"4px"});
			})
	$('.change').click(function () {
				$(this).prev().prev().text(generateMixed(4));
//				$(this).prev().prev().css({"letter-spacing":"4px"});
			})
			function generateMixed(n) {
			var res = "";
			var chars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
			for (var i = 0; i < n; i++) {
				var id = Math.ceil(Math.random() * 35);
				res += chars[id];
			}
			return res;
	}
})
