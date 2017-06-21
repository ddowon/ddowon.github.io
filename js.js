$(function(){

	var resize = function(){
		var resize_height = $(window).height();
		$("section.intro").height(resize_height-300+"px");
	}
    $(window).resize(function() {
        resize();
    })
	resize();

	$(window).on("scroll", function(){
			var scrollTop = $(window).scrollTop();
			if(!$(this).is(":animated")){

				if(scrollTop > 700) {
					$(".header").stop().animate({"right" :"0px"});
				}
				if(scrollTop < 700) {
					$(".header").stop().animate({ "right" : "-500px"});
				}
			}
			img_move();
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

	function img_move(){
		var portfolio_offset = $(".portfolio").offset().top;
		var scrollTop = $(window).scrollTop();
		var $delay_time = 0;
		if( scrollTop > portfolio_offset){
			$(".portfolio .list").find("li").each(function(){
				TweenMax.to([$(this)], 1,  { delay : $delay_time, opacity : 1, x : '-300px' })
				$delay_time += 0.2;
			})
		}
		
	}

	var $quick = $(".quick");

		$quick.find(".menu li").on("click", function(){
			var index = $(this).index();

			if( index == 0 ){
				var $target = $(".introduce-page");
			} else if( index == 1 ){
				var $target = $(".skill");
			} else if( index == 2 ){
				var $target = $(".portfolio");
			}
			$("html, body").animate({
				scrollTop : $target.offset().top
			}, 600 );
		})

		$(window).on("scroll", function(){
			scroll();
		})


	function scroll(){
		var scrollTop = $(window).scrollTop()+200;

		if(scrollTop >= $(".main .introduce-page").offset().top && scrollTop < $(".skill").offset().top){
			var $on = 0;
		}else if(scrollTop >= $(".main .skill").offset().top && scrollTop < $(".portfolio").offset().top){
			var $on = 1;
		}else if(scrollTop >= $(".main .portfolio").offset().top){
			var $on = 2;
		};
		
		$quick.find("ul li").eq($on).addClass("on").siblings().removeClass("on");
	};
	

})