// 登录，注册切换
$(function(){
	$(".login-main .login-nav a").click(function() {
		$(".login-main .login-nav a").removeClass('active');
		$(this).addClass('active');
	});
	$(".login-main .login-nav a").eq(0).click(function() {
		$(".login-log").show();
		$(".login-reg").hide();
	});
	$(".login-main .login-nav a").eq(1).click(function() {
		$(".login-log").hide();
		$(".login-reg").show();
	});
})
$(function(){
	$('.denglu button').click(function(event) {
		var username=$('.username').val();
		var userpass=$('.userpass').val();
		if(username==''){
			var mag = $('.username').attr('mag');
			$('.logintip #span_msg_tip b').text(mag);
		}
	});
})
//忘记密码
$(function(){
	$(".wangji").click(function(event) {
		$(".wpassword").show();
	});
	$(".heizao").click(function(event) {
		$(".wpassword").hide();
	});

	$(".tiaoxy").click(function(event) {
		$(".diyidu1").hide();
		$(".diyidu2").show();
	});
	$(".tiaoxy2").click(function(event) {
		$(".diyidu1").hide();
		$(".diyidu2").hide();
		$(".diyidu3").show();
	});
})

















































