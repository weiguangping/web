 		function a(){
			var email=document.getElementById("email").value;
			var pss=document.getElementById("password").value;
			if(email=='' || pss==''){return false;}
			var ischeck=document.getElementById("check").checked;
			setStorg(email,pss,ischeck);
			return true;
		}
		function setStorg(email,pass,ischeck) { 
			var userLoginInfo1={
				email:"",
				pass:"",
				ischeck:""
			};
			if(ischeck){
			var userLoginInfo={
				email:email,
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
			document.getElementById("email").value=userInfo.email;
			document.getElementById("password").value=userInfo.pass;
			document.getElementById("check").checked=userInfo.ischeck;
			}
		}
		$(function () {
			$('input, textarea').placeholder();
			$('.getcode').click(function () {
				$(this).val(generateMixed(4));
				$(this).css({"letter-spacing":"4px"});
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
