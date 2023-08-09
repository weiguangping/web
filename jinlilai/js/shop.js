$(function() {
	var flag = $(this).is(":checked");
	$(".address .add_address .checkbox_btn").click(function() {
		if(flag) {
			$('.address .add_address .checkbox').css('background', "url(images/shop/check4.png) no-repeat");
			flag=false;
		} else {
			$('.address .add_address .checkbox').css('background', "url(images/shop/check3.png) no-repeat");
			flag=true;
		}
	})
	$('.address .add_address .set').click(function () {
//		console.log(flag);
		if(flag) {
			$('.address .add_address .checkbox').css('background', "url(images/shop/check4.png) no-repeat");
			flag=false;
		} else {
			$('.address .add_address .checkbox').css('background', "url(images/shop/check3.png) no-repeat");
			flag=true;
		}
	})
})