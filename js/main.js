$(document).ready(function() {
    // nav page
    $('.menu .page1 ').click(function(event) {
        /* Act on the event */
        $('html, body').animate({ scrollTop: $("#page1").offset().top }, 1000);
    });
    $('.menu .page2 ').click(function(event) {
        /* Act on the event */
        $('html, body').animate({ scrollTop: $("#page2").offset().top }, 1000);
    });
    $('.menu .page3 ').click(function(event) {
        /* Act on the event */
        $('html, body').animate({ scrollTop: $("#page3").offset().top }, 1000);
    });
    $('.menu .page4 ').click(function(event) {
        /* Act on the event */
        $('html, body').animate({ scrollTop: $("#page4").offset().top }, 1000);
    });
   

    // fadein skillcontent
    $(document).scroll(function(e) {
        if ($(this).scrollTop() > 852) {
            $('.skillcontent').fadeIn(1500);
        };
    });
    
    // slidedown contactcontent
    $(document).scroll(function(e) {
        if ($(this).scrollTop() > 1940) {
            $('.contactcontent').slideDown(1500);
        };
    });

});