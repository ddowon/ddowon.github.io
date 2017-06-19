$(function(){



	var resize = function(){
		var resize_height = $(window).height();
		$("section.intro").height(resize_height-300+"px");
	}
    $(window).resize(function() {
        reize();
    })
	resize();

	$(window).on("scroll", function(){
			var scrollTop = $(window).scrollTop();
			if(scrollTop > 700) {
				$(".header").animate({ "right" :"0px"},500);
				console.log("show")
			}
			if(scrollTop < 700) {
				$(".header").animate({ "right" : "-500px"},500);
				console.log("hide")
			}
				console.log(scrollTop);
		
	});
	
	function mouseScroll(){
		$(".intro").on("scroll", function(delta){
			if(delta < 0){
				scrollTop :$(".introduce").offset.top();
			}
		})
	}
	function scrollAnimate(){
		$(".scroll").animate({'bottom':'50px'}, 600).animate({'bottom':'65px'},600, scrollAnimate)
	}

	scrollAnimate();


	// 각각의 img 높이값을 구해야 함 
	// var img_height = $(".img-wrap img").height();
	// var img_wrap_height = $(".img-wrap").height();
	// console.log(img_height);
	// $(".img-wrap").on("mouseenter", function(){
		// $(this).find("img").css("top",img_wrap_height-img_height+"px" );
	// })
	// $(".img-wrap").on("mouseleave", function(){
		// $(this).find("img").animate({"top":"0px"},200);
	// })
	// 
})