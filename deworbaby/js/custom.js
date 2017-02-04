$(document).ready(e=>{	
	var winWidth = $(window).width();
	$.fn.__mainBody(winWidth);
});
$(document).on('click','.close', e =>{
	$.fn.__closeMenu();
})

$.fn.__mainBody = function(e){
	$('.responsiveMenu').bind('click', e =>{
		$.fn.__toggleMenu();
	});
	if(e<= 768){
		$('<div class="close"><i class="fa fa-times"></i></div>')
		.appendTo('nav ul');	
	}	
}
$.fn.__closeMenu = function(){
	$('nav ul').fadeOut();
}

$.fn.__toggleMenu = function(){
	$('nav ul').fadeToggle();
}

