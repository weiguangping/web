window.onload = function() {
	$('.product_detail .center .box .buy').click(function () {
		var num=parseInt($('.product_detail .center .box .n .num').val());
		var shuju=[{id: 1,
		name1: "商务正装",
		name2: "图案：格子",
		name3: "颜色：白",
		name4: "尺码：175/92A",
		price: 50.00,
		number: num,
		img: "images/shop/img1.jpg",
		ischeck:true
		}];
		var shuju1=JSON.stringify(shuju);
		localStorage.setItem("confirm",shuju1);
	})
//	地址
	$('.product_detail .center .box .placed').click(function () {
		$(".place").fadeToggle(700);
	})
	$(".place li>a").click(function () {
		$(this).next().fadeIn(700).parent().siblings().find("dl").fadeOut();
	})
	$(".place li dl dd").click(function () {
		var vvvv=$(this).text();
		$('.product_detail .center .box .placed span').text(vvvv+"市");
		$(".place").fadeOut(700);
	})
//	产品详情和记录鼠标切换效果
	$('.main_right .nav_li li').hover(function () {
		$(this).not(":last-child").find("a").addClass("active1");
	},function () {
		$(this).not(":last-child").find("a").removeClass("active1");
	})
	$('.main_right .main_bottom .subnav li a').hover(function () {
		$(this).addClass("active1");
	},function () {
		$(this).removeClass("active1");
	})
	
	$('.main_left .top .sidenav .title').click(function () {
		$(this).next().slideToggle(500);
		if($(this).find("img").attr("src")=="images/product/jia.png"){
			$(this).find("img").attr("src","images/product/jian.png");
		}
			else{
				$(this).find("img").attr("src","images/product/jia.png")
			}
	})
	
	/*if(!ShopCar.isEmpty())
	{
	for(var i=0;i<3;i++){
		ShopCar.addProduct(products[i]);	
	}
	}*/
//	加入购物车
	$('.product_detail .center .box .add').click(function () {
		var num=$('.product_detail .center .box .n .num').val();
		var i=Math.floor(Math.random()*5);
		var product=products[i];
		product.number = parseInt(num);
		ShopCar.addProduct(product);		
	})
	
	//产品轮播
	$('.product_detail .main .left .lun li').mouseover(function() {
		var index = $(this).index();
		$(".product_detail .main .left #box1>img").attr("src", "images/product/lun" + (index + 1) + ".jpg");
			var src1="images/product/lunbig"+(index+1)+".jpg";
			$('#box2>img').attr('src',src1);
	})
	var timer = null;
	var flag = true;
	/*$('.product_detail .main .left .lun').hover(function () {
		clearInterval(timer);
	},function () {
		lun();
	})*/
//	lun();
	function lun() {
		timer = setInterval(function() {
			var left = $('.product_detail .main .left .lun ul').css("margin-left");
			if(flag) {
				flag = false;
				if(parseInt(left) <= -228) {
					$('.product_detail .main .left .lun ul').stop(false, true).animate({
						"marginLeft": "0px"
					}, 600, function() {
						flag = true;
					});
				} else {
					$('.product_detail .main .left .lun ul').stop(false, true).animate({
						"marginLeft": "-=" + h + "px"
					}, 600, function() {
						flag = true;
					});
				}
			}
		}, 2000);
	}
	var h = $('.product_detail .main .left .lun li').width() + 16;
	$('.product_detail .main .left .lun .next').click(function() {
		var left = $('.product_detail .main .left .lun ul').css("margin-left");
		//		console.log(left)
		if(parseInt(left)>-228){
		if(flag) {
			$(this).find("img").attr('src','images/product/next2.png');
			flag = false;
//			console.log(left)
				$('.product_detail .main .left .lun ul').stop(false, true).animate({
					"marginLeft": "-=" + h + "px"
				}, 600, function() {
					flag = true;
					$('.product_detail .main .left .lun a.next').find("img").attr('src','images/product/next1.png');
				});
			}
		}
	})
	$('.product_detail .main .left .lun .prev').click(function() {
		var left = $('.product_detail .main .left .lun ul').css("margin-left");
		if(parseInt(left)<0){
		if(flag) {
			$(this).find("img").attr('src','images/product/prev2.png');
			flag = false;
//			console.log(left)
				$('.product_detail .main .left .lun ul').stop(false, true).animate({
					"marginLeft": "+=" + h + "px"
				}, 600, function() {
					flag = true;
					$('.product_detail .main .left .lun a.prev').find("img").attr('src','images/product/prev1.png');
				});
			}
		}
	})

	$('.product_detail .center .box p .color').click(function() {
		$(this).css('border', '1px solid red').siblings().css("border", "1px solid white");
	})
	$('.product_detail .center .box p .size').click(function() {
		$(this).css('border', '1px solid red').siblings().css("border", "1px solid #cccccc");
	})
	var reduce = document.getElementById("jian");
	var add = document.getElementById("jia");
	var num = document.getElementById("num");
	var reply = document.getElementById("reply");
	var vall=null;
	$('#num').focus(function(e) {
		vall=$(this).val();
	})
	$('#num').blur(function(e) {
		var val2=$(this).val();
		var ind=val2.indexOf(".");
		var ind2=val2.indexOf("-");
		if(isNaN($(this).val())||$(this).val().substr(0,1)=="0"||$(this).val()==""||ind2!=-1)
		{$(this).val(vall);}
		if(ind!=-1){$(this).val(val2.substr(0,ind))}
		if(ind==0){$(this).val(1);}
	})
	jian.onclick = function() {
		reduce1();
	};
	jia.onclick = function() {
		add1();
	};
	//产品详情减
	function reduce1() {
		var count = parseInt(num.value);
		if(count <= 1) {
			reduce.setAttribute("disabled", "disabled");
			return;
		}
		num.value = --count;
	}
	//产品详情加
	var add1 = function() {
		//		alert("asf");
		var count = parseInt(num.value);
		if(count > 0) {
			reduce.removeAttribute("disabled");
		}
		num.value = ++count;
	}
}