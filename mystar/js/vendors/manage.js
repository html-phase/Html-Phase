$(document).ready(function () {

    /*Height for 3 sections*/
    // var headerWidth_ = $('.header .bg').width();
    // var section1_ = (headerWidth_ / 100) * 20;
    // var section2_ = (headerWidth_ / 100) * 60;
    // var section3_ = (headerWidth_ / 100) * 20;
    // $('.header-section1').width(section1_);
    // $('.header-section2').width(section2_);
    // $('.header-section3').width(section3_);
    
    
    /*Width for right section*/
    // var headerHeight = $('.header .bg').height();
    // var upperSection3Height = (headerHeight / 100) * 80;
    // var bottomSection3Height = (headerHeight / 100) * 20;
    // $('.upperSection3').height(upperSection3Height);
    // $('.bottomSection3').height(bottomSection3Height);
    
    
    // $(window).resize(function () {
    //     var headerWidth = $('.header .bg').width();
    //     console.log(headerWidth);
    //     var section1 = (headerWidth / 100) * 20;
    //     var section2 = (headerWidth / 100) * 60;
    //     var section3 = (headerWidth / 100) * 20;
    //     $('.header-section1').width(section1);
    //     $('.header-section2').width(section2);
    //     $('.header-section3').width(section3);

        
        
    //     var headerHeight = $('.header .bg').height();
    //     var upperSection3Height = (headerHeight / 100) * 80;
    //     var bottomSection3Height = (headerHeight / 100) * 20;
    //     $('.upperSection3').height(upperSection3Height);
    //     $('.bottomSection3').height(bottomSection3Height);
    // });
    
    
    $('.fp-slidesNav li:nth-child(1) span').html('<img class="" src="images/s1.png">');
    $('.fp-slidesNav li:nth-child(2) span').html('<img class="" src="images/s2.png">');
    $('.fp-slidesNav li:nth-child(3) span').html('<img class="" src="images/s3.png">');
    $('.fp-slidesNav li:nth-child(4) span').html('<img class="" src="images/s4.png">');
	$('.fp-slidesNav li:nth-child(5) span').html('<img class="" src="images/s4.png">');
    
    
    $('.slid_img img').hide();
    $('.slid_img img.img-gallery-1').show();
    
    $('.thumb-gallery-1').on('click', function () {
        $('.slid_img img').hide();
        $('.slid_img img.img-gallery-1').show();
    });
    $('.thumb-gallery-2').on('click touch', function () {
        $('.slid_img img').hide();
        $('.slid_img img.img-gallery-2').show();
    });
    $('.thumb-gallery-3').on('click', function () {
        $('.slid_img img').hide();
        $('.slid_img img.img-gallery-3').show();
    });
    $('.thumb-gallery-4').on('click touch', function () {
        $('.slid_img img').hide();
        $('.slid_img img.img-gallery-4').show();
    });
    $('.thumb-gallery-5').on('click touch', function () {
        $('.slid_img img').hide();
        $('.slid_img img.img-gallery-5').show();
    });

});