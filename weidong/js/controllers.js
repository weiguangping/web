angular.module('starter.controllers', [])
.controller("oneController",function ($scope,$ionicSideMenuDelegate,$http,$ionicLoading,$timeout) {
	$scope.reload=function(){
			 $ionicLoading.show({
	      template:'<ion-spinner icon="android" class="spinner spinner-android"></ion-spinner>',
	      noBackdrop :false
	    })
	    $timeout(function(){
	    	location.reload();
	       $ionicLoading.hide();
	    },400);
	}
			$scope.data=[{"name":"钻石","url":"#/app/product"},{"name":"黄金","url":"#/app/product"},{"name":"白银","url":"#/app/product"},{"name":"宝石","url":"#/app/product"},{"name":"和田玉","url":"#/app/product"},{"name":"翡翠","url":"#/app/product"},{"name":"玉石","url":"#/app/product"},{"name":"项链","url":"#/app/product"},{"name":"手链","url":"#/app/product"},{"name":"耳环","url":"#/app/product"},{"name":"水晶","url":"#/app/product"},{"name":"戒指","url":"#/app/product"}
	]
		$scope.data2=[{"name":"钻石","url":"#/app/product"},{"name":"黄金","url":"#/app/product"},{"name":"白银","url":"#/app/product"},{"name":"宝石","url":"#/app/product"},{"name":"和田玉","url":"#/app/product"},{"name":"翡翠","url":"#/app/product"},{"name":"玉石","url":"#/app/product"},{"name":"项链","url":"#/app/product"},{"name":"手链","url":"#/app/product"},{"name":"耳环","url":"#/app/productl"},{"name":"水晶","url":"#/app/product"},{"name":"戒指","url":"#/app/product"}
]
		$scope.data1=[{"img":"img/com/guide_1.jpg","url":"img/com/banner_1.jpg"},{"img":"img/com/guide_2.jpg","url":"img/com/banner_2.jpg"},{"img":"img/com/start.jpg","url":"img/com/banner_3.jpg"}]
	$scope.clear=function () {
		$scope.data2="";
	}
})
.controller("categoryController",function ($scope,$http,$ionicLoading,$timeout) {
	$scope.reload=function(){
			 $ionicLoading.show({
	      template:'<ion-spinner icon="android" class="spinner spinner-android"></ion-spinner>',
	      noBackdrop :false
	    })
	    $timeout(function(){
	    	location.reload();
	       $ionicLoading.hide();
	    },400);
	}
	$http.get("js/pro.json").success(function (data) {
		$scope.data=data
	})
	$scope.right=function () {
		    $(".sort .top .row-wrap li:first").appendTo($(".sort .top .row-wrap"));
	}
	$scope.left=function () {
		    $(".sort .top .row-wrap li:last").prependTo($(".sort .top .row-wrap"));
	}
	$(".sort .top .row-wrap li").click(function () {
		$(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
		var text=$(this).find("a").text();
		if(text=="天然宝石"){
			$(".sort .prolist>ul").show();
			$(".sort .otherText").html("");
			$(".sort .otherText").hide();
		}
		else{
			$(".sort .prolist>ul").hide();
			$(".sort .otherText").show();
			$(".sort .otherText").html("这是"+text+"页面")
		}
	})
})
.controller("confirmController",function ($scope,$rootScope,$http,$ionicLoading,$timeout) {
	$scope.reload=function(){
			 $ionicLoading.show({
	      template:'<ion-spinner icon="android" class="spinner spinner-android"></ion-spinner>',
	      noBackdrop :false
	    })
	    $timeout(function(){
	    	location.reload();
	       $ionicLoading.hide();
	    },400);
	}
		if(localStorage.getItem("okclick")=="true")
		{
			$rootScope.proList1=products;
			$rootScope.totalPri=1000575;
		}
			else{
				if(ShopCar.isEmpty()){
		var carData = ShopCar.getProductList(); 
		var productList = carData.productList;
		var arr=[];
		$rootScope.totalPri=0;
		for(var i in productList)
		{
			if(productList[i].ischeck)
			{
				arr.push(productList[i]);
				$rootScope.totalPri+=parseInt(productList[i].number)*parseInt(productList[i].price);
			}
		}
		$rootScope.proList1=arr;
	}
			}
})
.controller("prodetailController",function ($scope,$rootScope,$http,$ionicActionSheet,$ionicPopup,$ionicLoading,$timeout) {
	$scope.reload=function(){
			 $ionicLoading.show({
	      template:'<ion-spinner icon="android" class="spinner spinner-android"></ion-spinner>',
	      noBackdrop :false
	    })
	    $timeout(function(){
	    	location.reload();
	       $ionicLoading.hide();
	    },400);
	}
	$http.get("js/prodetail.json").success(function (data) {
		$scope.data=data[0]
	})
	$scope.follow=function () {
		$ionicPopup.confirm({
			title: '关注',
			template:'您确定要关注么？',
			okText:'确定',
			cancelText:'取消'
		})
	}
	$scope.share=function(){
      $ionicActionSheet.show({
        titleText:"<h4>分享连接</h4>",
        cancelText:"取消",
        buttons:[
          {"text":"QQ"},
          {"text":"微信"},
          {"text":"微博"}
        ],
        cancel:function(){
        },
        buttonClicked:function(){
          return true;
        },
        destructiveButtonClicked:function(){
          return true;
        }
      })
    }
	$scope.buy=function () {
		localStorage.setItem("okclick","true");
		$rootScope.proList1=products;
		$rootScope.totalPri=1000575;
	}
	$scope.val=1;
	$scope.add=function () {
		var num=parseInt($(".num").val());
		num++
		$scope.val=num;
		if($scope.val>99)
		$scope.val=99;
		$(".num").val($scope.val);
	}
	$scope.reduce=function () {
		var num=parseInt($(".num").val());
		num--;
		$scope.val=num;
		if($scope.val<1)
		{
			$scope.val=1;
		}
		$(".num").val($scope.val);
	}
	$scope.v=1;
	$scope.focus=function ($index) {
		$scope.v=$(".num").val();
	}
	$scope.blur=function ($index) {
		if(isNaN($(".num").val())||$(".num").val().indexOf('.')!=-1||$(".num").val().indexOf('-')!=-1||$(".num").val()==""||$(".num").val()=="0")
					{
						$(".num").val($scope.v);
						$scope.val=$scope.v;
					}
					else{
						$scope.v=$(".num").val();
						$scope.val=$scope.v;
					}
			}
	$scope.num=0;
	if(ShopCar.isEmpty()){
	var carData = ShopCar.getProductList();
	$scope.num=carData.totalNumber;
	}
	$scope.addCar=function () {
		var num=$('.btn input').val();
		var product=products[0];
		product.number = parseInt(num);
		ShopCar.addProduct(product);	
		var carData = ShopCar.getProductList();
		$scope.num=carData.totalNumber;
		$rootScope.proList=carData.productList;
	}
	$(".bottom>div").click(function () {
		$(this).find("button").addClass("active").parent().siblings().find("button").removeClass("active");
		var text=$(this).find("button").text();
		if(text=="商品规格"){
			$(".text").show();
			$(".otherText").hide();
			$(".otherText").html("");
		}
		else{
			$(".text").hide();
			$(".otherText").show();
			$(".otherText").html("这是"+text+"页面");
		}
	})
})
.controller("proController",function ($scope,$rootScope,$http,$ionicLoading,$timeout) {
	$scope.reload=function(){
			 $ionicLoading.show({
	      template:'<ion-spinner icon="android" class="spinner spinner-android"></ion-spinner>',
	      noBackdrop :false
	    })
	    $timeout(function(){
	    	location.reload();
	       $ionicLoading.hide();
	    },400);
	}
	$http.get("js/prolist.json").success(function (data) {
		$scope.data=data
	})
	$scope.add=function ($index,id) {
		for(var i=0;i<products.length;i++){
			if(products[i].id==id){
				ShopCar.addProduct(products[i]);	
			}
		}
		var carData = ShopCar.getProductList();
		$rootScope.proList=carData.productList;
	}
	$rootScope.click=false;
	$scope.buy=function ($index) {
		localStorage.setItem("okclick","true");
		$rootScope.proList1=products;
		$rootScope.totalPri=1000575;
	}
	$scope.right=function () {
		    $(".pro .row-wrap li:first").appendTo($(".pro .row-wrap"));
	}
	$scope.left=function () {
		    $(".pro .row-wrap li:last").prependTo($(".pro .row-wrap"));
	}
	$(".pro .row-wrap li").click(function() {
		$(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
		var text=$(this).find("a").text();
		if(text=="项链"){
			$(".pro .prolist div").not(".otherText").show();
			$(".pro .otherText").html("");
		}
		else{
			$(".pro .prolist div").not(".otherText").hide();
			$(".pro .otherText").html("这是"+text+"页面")
		}
	})
})
.controller("shopCarController",function ($scope,$rootScope,$http,$ionicPopup,$ionicLoading,$timeout) {
	$scope.checkedAll=false;
	$scope.reload=function(){
			 $ionicLoading.show({
	      template:'<ion-spinner icon="android" class="spinner spinner-android"></ion-spinner>',
	      noBackdrop :false
	    })
	    $timeout(function(){
	    	location.reload();
	       $ionicLoading.hide();
	    },400);
	}
	$scope.checkBtn=function ($event,id) {
		var newproList=null;
		if(event.target.checked)
		{	
			var carData = ShopCar.getProductList();
			var productList = carData.productList;
			for(var i in productList){
					if(id==productList[i].id)
					{
				 newproList=ShopCar.updatecheck(productList[i].id,true);
//				 console.log(newproList)
					}
				}
			
			$rootScope.proList=newproList.productList;
		}
		else{
			var carData = ShopCar.getProductList();
			var productList = carData.productList;
			for(var i in productList){
					if(id==productList[i].id)
					{
						newproList=ShopCar.updatecheck(productList[i].id,false);}
				}
			$rootScope.proList=newproList.productList;
			$scope.checkedAll=false;
		}
		$scope.upSum();
		for(var j in $rootScope.proList){
				if($rootScope.proList[j].ischeck==false)
				{
					$scope.checkedAll=false;
					return;
				}
				$scope.checkedAll=true;
			}
	}
	$scope.checkAll=function ($event) {
		if($event.target.checked){
			var carData = ShopCar.getProductList();
			var productList = carData.productList;
			if(productList.length>0){
				for(var i in productList){
					var newproList=ShopCar.updatecheck(productList[i].id,true);
				}
			$rootScope.proList=newproList.productList;
			$scope.checkedAll=true;
			}
		}
		else{
			var carData = ShopCar.getProductList();
			var productList = carData.productList;
			if(productList.length>0){
			for(var i in productList){
					var newproList=ShopCar.updatecheck(productList[i].id,false);
				}
			$rootScope.proList=newproList.productList;
			$scope.checkedAll=false;
		}
		}
		$scope.upSum();
	}
	$("#sum").click(function () {
		if(localStorage.getItem("confirm"))
		{
			localStorage.removeItem("confirm");
		}
		localStorage.setItem("okclick","false");
		var sum=0;
		var carData = ShopCar.getProductList();
		var productList = carData.productList;
		var arr=[];
		$rootScope.totalPri=0;
		for(var i in productList){
			if(productList[i].ischeck){
				sum++;
				arr.push(productList[i]);
				$rootScope.totalPri+=parseInt(productList[i].price)*parseInt(productList[i].number);
			}
		}
		if(sum==0||!ShopCar.isEmpty()){
			$(this).attr('href','javascript:;');
			$ionicPopup.alert({
		       title: '警告',
		       template: '亲,请选择需要结算的商品!'
    		 });
		}
		else{
			$(this).attr('href','#/confirm_order');
			$rootScope.proList1=arr;
		}
	})
	$scope.upSum=function () {
		var carData = ShopCar.getProductList(); 
		var productList = carData.productList;
		$rootScope.tolPrice=0;
		for(var i in productList){
			if(productList[i].ischeck)
			{
				$rootScope.tolPrice+=parseInt(productList[i].price)*parseInt(productList[i].number);
			}
		}
	}
	$scope.add=function ($index,id) {
		var newproList=null;
		var carData = ShopCar.getProductList(); 
		var productList = carData.productList;
		for(var i in productList){
			if(id==productList[i].id)
				{
					var v=parseInt(productList[i].number)
					v++;
					if(v>99)v=99;
					newproList=ShopCar.updateProduct(productList[i].id,v);
				}		
		}
		$scope.upSum();
		$rootScope.proList=newproList.productList;
	}
	$scope.reduce=function ($index,id) {
		var newproList=null;
		var carData = ShopCar.getProductList(); 
		var productList = carData.productList;
		for(var i in productList){
			if(id==productList[i].id)
				{
					var v=parseInt(productList[i].number)
					v--;
					if(v<1){
						v=1;
					}
					newproList=ShopCar.updateProduct(productList[i].id,v);
				}		
		}
		$scope.upSum();
		$rootScope.proList=newproList.productList;
	}
	$scope.v=1;
	$scope.focus=function ($event,$index) {
//		$scope.v=$(".item").eq($index).find(".btn").find("input").val();
		$scope.v=$event.target.value;
	}
	$scope.blur=function ($event,$index) {
		var vvv=$event.target.value;
		if(isNaN(vvv)||vvv.indexOf(".")!=-1||parseInt(vvv)<=0||vvv==""){
			$event.target.value=$scope.v;
		}
		else{
			$scope.v=$event.target.value;
		}
		var id=$event.target.parentNode.parentNode.getAttribute("id");
		var carData = ShopCar.getProductList(); 
		var productList = carData.productList;
		for(var i in productList){
			if(id==productList[i].id)
				{
					var newproList=ShopCar.updateProduct(productList[i].id,parseInt($scope.v));
				}
			}
				$rootScope.proList=newproList.productList;
				$scope.upSum();
	}
	$scope.del=function ($index,id) {
		var confirm=$ionicPopup.confirm({
		     title:'警告',
			 template: '亲,请你确定要删除么!',
			 okText:'确定',
			 cancelText:'取消'
		})
		confirm.then(function (res) {
			if(res)
			{
			var newProductList=ShopCar.delProductById(id);
			$rootScope.proList=newProductList.productList;
			$scope.upSum();
				if($rootScope.proList.length<=0){
					$scope.checkedAll=false;
					ShopCar.clearCar();
					return;
				}
				for(var j in $rootScope.proList){
				if($rootScope.proList[j].ischeck==false)
				{
					$scope.checkedAll=false;
					return;
				}
				$scope.checkedAll=true;
			}
			}
		})
	}
	$rootScope.tolPrice=0;
	if(localStorage.getItem("confirm")){
		localStorage.removeItem("confirm");
	}
	if(ShopCar.isEmpty()){
		var carData = ShopCar.getProductList(); 
		var productList = carData.productList;
		for(var i in productList){
			var newpro=ShopCar.updatecheck(productList[i].id,false);
		}
		$rootScope.proList=newpro.productList;
		$rootScope.tolPrice=0;
	}
})
.controller("payController",function ($scope,$rootScope,$http,$ionicLoading,$timeout) {
		$scope.reload=function(){
					 $ionicLoading.show({
			      template:'<ion-spinner icon="android" class="spinner spinner-android"></ion-spinner>',
			      noBackdrop :false
			    })
			    $timeout(function(){
			    	location.reload();
			       $ionicLoading.hide();
			    },400);
			}
		if(localStorage.getItem("okclick")=="true"){
			$rootScope.totalPri=1000575;
		}
		else{
			if(ShopCar.isEmpty()){
			var carData = ShopCar.getProductList(); 
			var productList = carData.productList;
			$rootScope.totalPri=0;
			for(var i in productList)
			{
				if(productList[i].ischeck)
				{
					$rootScope.totalPri+=parseInt(productList[i].number)*parseInt(productList[i].price);
				}
			}
		}
		}
		$(".padding .item").click(function () {
				$(this).find("i:last").find("img").attr("src","img/user/check2.png");
				$(this).siblings().find("i:last").find("img").attr("src","img/user/check1.png")
			})
			$(".row:first .col-50 a:first img").css("border","1px solid red");
			$(".row .col-50 a").click(function () {
				$(".row img").css("border","1px solid #CCCCCC");
				$(this).find("img").css("border","1px solid red");
			})
})
.controller("loginController",function($scope,$ionicLoading,$timeout) {
	$scope.reload=function(){
			 $ionicLoading.show({
	      template:'<ion-spinner icon="android" class="spinner spinner-android"></ion-spinner>',
	      noBackdrop :false
	    })
	    $timeout(function(){
	    	location.reload();
	       $ionicLoading.hide();
	    },400);
	}
	loadStorg();
	var flag=true;
	$scope.login=function () {
		var name=document.getElementById("name").value;
			var pss=document.getElementById("password").value;
			if(name=='' || pss==''){flag= false;}
			var ischeck=document.getElementById("check").checked;
			if(flag){
				setStorg(name,pss,ischeck);
			}
	}
	function setStorg(name,pass,ischeck) { 
			var userLoginInfo1={
				name:"",
				pass:"",
				ischeck:""
			};
			if(ischeck){
			var userLoginInfo={
				name:name,
				pass:pass,
				ischeck:ischeck
			};
			localStorage.setItem("userLoginInfo",JSON.stringify(userLoginInfo));
			}
			else{
				localStorage.setItem("userLoginInfo",JSON.stringify(userLoginInfo1));
			}
		}
		function loadStorg () {
			if(localStorage.getItem("userLoginInfo")){
			var obj=localStorage.getItem("userLoginInfo");
			var userInfo=JSON.parse(obj);
			document.getElementById("name").value=userInfo.name;
			document.getElementById("password").value=userInfo.pass;
			document.getElementById("check").checked=userInfo.ischeck;
			}
		}
})
.controller("regitController",function ($scope,$ionicLoading,$timeout) {
	$scope.reload=function(){
			 $ionicLoading.show({
	      template:'<ion-spinner icon="android" class="spinner spinner-android"></ion-spinner>',
	      noBackdrop :false
	    })
	    $timeout(function(){
	    	location.reload();
	       $ionicLoading.hide();
	    },400);
	}
	$('.getcode').click(function () {
				$(this).text(generateMixed(4));
				$(this).css({"letter-spacing":"4px","paddingLeft":"8px"});
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
.controller("userController",function ($scope,$rootScope,$ionicLoading,$timeout) {
	$scope.log=function(){
		location.href="#/login";
	}
	$scope.reload=function(){
			 $ionicLoading.show({
	      template:'<ion-spinner icon="android" class="spinner spinner-android"></ion-spinner>',
	      noBackdrop :false
	    })
	    $timeout(function(){
	    	location.reload();
	       $ionicLoading.hide();
	    },400);
	}
	$scope.setdata=function () {
		localStorage.setItem("okclick","true");
		$rootScope.proList1=products;
		$rootScope.totalPri=1000575;
	}
})
.controller("indexController",function ($scope,$ionicSideMenuDelegate,$http,$ionicLoading,$timeout) {
	$scope.clicko=function () {
		$timeout(function () {
		document.getElementById("auto").focus();
	},300)
	}
	$scope.date2=[{"img":"img/com/guide_1.jpg","url":"img/com/banner_1.jpg"},{"img":"img/com/guide_2.jpg","url":"img/com/banner_2.jpg"},{"img":"img/com/start.jpg","url":"img/com/banner_3.jpg"}]
	$scope.err=[];
	$scope.moredata=true;
	var j=0;
	var k=0;
	var i=0;
	var l=0;
	$scope.loadMore=function () {
		 $ionicLoading.show({
	      template:'<ion-spinner icon="android" class="spinner spinner-android"></ion-spinner>',
	      noBackdrop :false
	    })
	    $timeout(function(){
	    	$http.get("js/index.json").success(function (shuju) {
			l=shuju.length;
			for(i=k;i<shuju.length;i++){
				j++;
				$scope.err.push(shuju[i]);
				if(j%3==0){
					k=i+1;
					break;
				}
			}
			$scope.$broadcast('scroll.infiniteScrollComplete');
			if(j>=l){
				$scope.moredata=false;
				$scope.$broadcast('scroll.infiniteScrollComplete');
			}
		})
	       $ionicLoading.hide();
	    },400);
	}
	 $scope.$on('stateChangeSuccess', function() {
	    $scope.loadMore();
	  });
	$scope.inputClick=function () {
		location.href="#/search"
	}
	$scope.slide=function () {
		 $ionicSideMenuDelegate.toggleRight();
		 document.getElementById("crt").style.display="none";
	}
})
.controller("guideController", function($scope, $http) {
					var bgh=document.documentElement.clientHeight;
					$scope.h={"height":bgh+'px'}
					$scope.data=[{"img":"img/com/guide_1.jpg","url":"img/com/banner_1.jpg"},{"img":"img/com/guide_2.jpg","url":"img/com/banner_2.jpg"},{"img":"img/com/start.jpg","url":"img/com/banner_3.jpg"}];
					$scope.chanGe=function ($index) {
						if($index>1){
							var box=document.getElementsByTagName("ion-slide");
//							console.log(box[2].childNodes[3])
							box[2].childNodes[3].style.display="block";
						}
					}
				})