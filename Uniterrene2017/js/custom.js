
$(document).ready(function(){
$("#flexiselDemo3").flexisel({
      visibleItems: 4,
      itemsToScroll: 1,
      autoPlay: {
        enable: false,
            interval: 5000,
        pauseOnHover: true
      }
    });
$('.flexslider').flexslider({
    animation: "slide",
    controlsContainer: $(".custom-controls-container"),
    customDirectionNav: $(".custom-navigation a")
  });
	
	$('#testimonial .flex-direction-nav').css({'display':'none'});



	  $('.popup-btn').click(function(e) {
	    $('.popup-wrap').fadeIn(250);
	    $('.popup-box').removeClass('transform-out').addClass('transform-in');

	    e.preventDefault();
	  });

	  $('.popup-close').click(function(e) {
	    $('.popup-wrap').fadeOut(500);
	    $('.popup-box').removeClass('transform-in').addClass('transform-out');

	    e.preventDefault();
	  });

var portfolioOffsetTop = $('#portfoliio').offset().top;
console.log(portfolioOffsetTop);

$(window).scroll(function(){
	var scrollPos = $(this).scrollTop();
	//console.log(scrollPos);
	if(scrollPos > 1890){
		$('.flexslider2 li.flex-active-slide').find('.left_ img').addClass('img-add');
		
		$('.flexslider2 li.flex-active-slide').find('.right_').addClass('right-add');
		$('.flexslider2 li.flex-active-slide').find('.right_ li').each(function(){
    		$(this).animate({'left':"0px"},1500);
    	}); 
	}
});


$('.flexslider2').flexslider({
    animation: "slide",
    animationSpeed: 1000,
    pauseOnHover: true,
    useCSS: true,
    before: function(){
      
    },
    after: function(){
    	//$('.flexslider2 li.flex-active-slide').find('.right_').css({'opacity':'0'});
    	$('.flexslider2 li.flex-active-slide').find('.left_ img').addClass('img-add');

    	$('.flexslider2 li.flex-active-slide').find('.right_').addClass('right-add');
    	$('.flexslider2 li.flex-active-slide').find('.right_ li').animate({'left':"0px"},1500);

    	$('.flexslider2 li.flex-active-slide').prev().find('.left_ img').removeClass('img-add');
    	$('.flexslider2 li.flex-active-slide').next().find('.left_ img').removeClass('img-add');

    	$('.flexslider2 li.flex-active-slide').prev().find('.right_').removeClass('right-add');
    	$('.flexslider2 li.flex-active-slide').next().find('.right_').removeClass('right-add');

    	$('.flexslider2 li.flex-active-slide').next().find('.right_ li').animate({'left':"600px"},100);
    	$('.flexslider2 li.flex-active-slide').prev().find('.right_ li').animate({'left':"600px"},100);
    },
    controlsContainer: $(".custom-controls-container2"),
    customDirectionNav: $(".custom-navigation2 a")

  });
// $('#portfoliio li.flex-active-slide').on('change',function(){
// 	console.log("sdfd");
// })
setInterval(function(){ 

$('#portfoliio .flexslider2 li.flex-active-slide').each(function(){
	var aa = $(this).find('.left_').find('img').attr('src');
	//console.log(aa)
	aa = "images/portfolio_right_bg.jpg";
	$('#portfoliio .right_part .img_part').css({'background':'url('+ aa +') no-repeat right top'})
})




 }, 200);


//var aa = $('#portfoliio .flexslider2').find('.flex-active-slide').find('.left_').find('img').attr('src');

$('.responsiveMenu').bind('click',function(){
	$('nav .navigation ul').stop().slideToggle();
})
$('.close').bind('click',function(){
	$('nav .navigation ul').stop().slideToggle();
})













});	

// $(document).keydown(function(event){
// 	console.log(event);
//     if(event.keyCode==123){
//     	alert("Don't try ...");
//     return false;
//    }
// else if(event.ctrlKey && event.shiftKey && event.keyCode==73){        
//       return false;  //Prevent from ctrl+shift+i
//    }
//    else if(event.ctrlKey && event.keyCode==67){  
//    	alert("copy not allowed")      ;
//       return false;  //Prevent from ctrl+c
//    }
//    else if(event.keyCode==27){  
//    		$('nav .navigation ul').slideUp();
//       //return false;  //Prevent from ctrl+c
//    }
//    else if(event.keyCode==77){  
//    		$('nav .navigation ul').stop().slideToggle();
//       //return false;  //Prevent from ctrl+c
//    }
// });

// $(document).on("contextmenu",function(e){   //removeing the context menu(right click)     
//    e.preventDefault();
// });

