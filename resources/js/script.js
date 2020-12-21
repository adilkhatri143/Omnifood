$(document).ready(function(){
    $('.js-section-feature').waypoint(function(direction){
        if(direction == "down"){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }
    });

    // Scroll on button
    $('.js-scroll-to-plan').click(function(){
        $('html, body').animate({scrollTop: $('.js-plan-section').offset().top}, 1000);
    });

    $('.js-scroll-to-feature').click(function(){
        $('html, body').animate({scrollTop: $('.js-section-feature').offset().top}, 1000);
    });


    // animation on scroll

    $('.js-wp-1').waypoint(function(){
        $('.js-wp-1').addClass('animated animate__fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js-wp-2').waypoint(function(){
        $('.js-wp-2').addClass(' animated animate__fadeInUpBig');
    }, {
        offset: '50%'
    });

    $('.js-wp-3').waypoint(function(){
        $('.js-wp-3').addClass('animate__headShake');
    }, {
        offset: '50%'
    });

    $('.js-wp-4').waypoint(function(){
        $('.js-wp-4').addClass(' animate__pulse');
    }, {
        offset: '50%'
    });
});