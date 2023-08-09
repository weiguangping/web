$(function(){
	var mySwiper = new Swiper('.swiper-container', {
			direction: 'vertical',
			// loop:true,
			mousewheelControl: true,
			onInit: function(swiper) {
				swiperAnimateCache(swiper);
				swiperAnimate(swiper);
			},
			onSlideChangeEnd: function(swiper) {
				swiperAnimate(swiper);
			},
			onTransitionEnd: function(swiper) {
				swiperAnimate(swiper);
			},

			watchSlidesProgress: true,
		})

	var music = document.getElementsByClassName('music')[0];
	
	music.onclick = function(){
		if(music.className == 'music rotating'){
			music.className = 'music';
			document.getElementById("aud").pause();
		}else{
			music.className = 'music rotating';
			document.getElementById("aud").play();
		}
	}

	document.onreadystatechange = function () {      
	 	if(document.readyState=="complete") {   
	   		document.getElementsByClassName("io")[0].style.display = "none";
	    }     
	}
	
})