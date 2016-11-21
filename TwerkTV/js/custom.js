$(document).ready(function(){

   $('.video-box').on('click', function(e){
       e.preventDefault();
       $('.popup_overlay').css({'transform':'scale(1,1)'});

  });
   $('.cross_bar .cross_area a').on('click', function(even){
     even.preventDefault();
     $('.popup_overlay').css({'transform':'scale(0,0'});
   })

});	