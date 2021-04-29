$(function(){
    //venobox
    $('.venobox').venobox(); 
    
    //funfact counterup
    $('.counter').counterUp({
        delay: 5,
        time: 1500
    });
    //recent slider
    $('.recent-main').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed:1000,
        arrows:false,
        centerMode:true,
        centerPadding:false,

        responsive: [
           
            {
              breakpoint: 576,
              settings: {
              slidesToShow: 1,
              }
            },
            {
              breakpoint: 992,
              settings: {
              slidesToShow: 2,
              }
            },
           
          ]
    });
    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if (scrolling > 50){
            $('.navbar').addClass('bg');
        }
        else{
            $('.navbar').removeClass('bg');
        }
    });
    //animation scroll js
    var html_body = $('html, body');
    $('a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 60
                }, 1500,);
                return false;
            }
        }
    });

});