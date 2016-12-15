$(document).ready(function(){

	// $(document).on('click','.fullSearch', function(){

	// });
	$('.fullSearch').bind('click',function(){
		$('.fullSecreenSearch').fadeIn();
	});
	$('.close').bind('click',function(){
		$(this).parent().fadeOut();
	});
	$('.formInput').focusin(function() {
		$('.fullSecreenSearch').addClass('focusIned');
	});
	$('.formInput').focusout(function() {
		$('.fullSecreenSearch').removeClass('focusIned');
	});

	$('.responsiveMenu a').bind('click',function(){
		$('ul.navs').slideToggle();
	});



	//14-12

	$('.main_items li > a').bind('click',function(){

		//15-12
		//$('.main_items li > a').addClass('forArrow');

		if($(this).parent().siblings().hasClass('opened')){
			$(this).parent().siblings().removeClass('opened');
			$(this).parent().siblings().find('ul').slideUp();
			$(this).parent().siblings().find('i').addClass('fa-angle-down');
			$(this).parent().siblings().find('i').removeClass('fa-angle-up');
			$(this).parent().find('.sub_items').find('i').removeClass('fa-angle-down').removeClass('fa-angle-up');
		}
		$(this).parent().toggleClass('opened');
		$(this).parent().find('ul').slideToggle();
		$(this).parent().find('i').toggleClass('fa-angle-down');
		$(this).parent().find('i').toggleClass('fa-angle-up');
		$(this).parent().find('.sub_items').find('i').removeClass('fa-angle-down').removeClass('fa-angle-up');
	});


	//15-12
	$('.bottomFilterUl li label').bind('click',function(){
		$(this).addClass('ActiveFilter').parent().parent().siblings().find('.ActiveFilter').removeClass('ActiveFilter');
		//alert($(this).parent().find('input').val());
		console.log('Custom filter selected : '+$(this).parent().find('input').val());
	});
	$('.ratingArea ul li').bind('click',function(){
		$('.ratingArea ul li').removeClass('doneRating');
		var ind = $(this).index();
		$('span.ratingPoint').text(10-ind);
		$(this).addClass('doneRating');
	 	$(".ratingArea ul li:gt("+ ind +")").addClass('doneRating');
	 	//alert(ind);
	});



	//scroll

	$(window).scroll(function(){
		var scroollPos = $(this).scrollTop();
		if(scroollPos > 200){
			$('header').addClass('smaller');
		}else{
			$('header').removeClass('smaller');

		}
	})
		

});