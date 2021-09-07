$(document).ready(function(){
	$(window).scroll(function(){
		var windowWidth = $(window).width();
		if(windowWidth > 800){
			var scroll = $(window).scrollTop();

			$("header .text").css({
				"transform": "translate(0px," + scroll / 2 +  "%)"
			});

			$(".acercaDe article").css({
				"transform": "translate(0px, -" + scroll / 4 +  "%)"
			});


		}
	});

	$(window).rezise(function(){
		var windowWidth = $(window).width();
		if(windowWidth<800){
			$(".acercaDe article").css({
				"transform": "translate(0px, 0px)"
			});
		}
	});
});