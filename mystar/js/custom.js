$(document).ready(function(){


 // One page navigation smooth scroll
  	  $('.side-scroll a').on('click', function(e){
  	  	//alert('sfds');
         e.preventDefault();
         var divAtr = $(this).attr('href');
         var secOffset= $(divAtr).offset().top;
         //alert(secOffset);
         $('html,body').animate({
            scrollTop:secOffset
          },2000); 

  	  });

// one page active button

      var aChildren = $(".side-scroll li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values
     console.log(aArray);
    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divExactPos=divPos-20;
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divExactPos && windowPos < (divExactPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("active");
            } else {
                $("a[href='" + theID + "']").removeClass("active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$(".side-scroll li:last-child a").hasClass("active")) {
                var navActiveCurrent = $(".active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("active");
                $(".side-scroll li:last-child a").addClass("active");
            }
        }
    });


});	