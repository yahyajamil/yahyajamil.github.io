$(document).ready(function () {

    $(window).scroll(function () {
        var scrollValue = $(document).scrollTop();
        var navbar = $('.navbar');

        if (scrollValue > 75) {
            if (!navbar.hasClass("fixed")) {
                navbar.addClass("fixed").slideDown();
                $('.navbar-brand span, .navbar-nav>li>a, .icon-bar').addClass("scrolled");
            }
        } else {
            if (navbar.hasClass("fixed")) {
                navbar.removeClass("fixed");
                $('.navbar-brand span, .navbar-nav>li>a, .icon-bar').removeClass("scrolled");
            }
        }
    });

    $(".navbar-toggle").on("click", function () {
        $(this).toggleClass("mixitup-control-active");
    });


    $(".nav.navbar-nav li:eq(0) a").click(function () {
        $('html, body').animate({
            scrollTop: $("#Home").offset().top
        }, 2000);
    });

    $(".nav.navbar-nav li:eq(1) a").click(function () {
        $('html, body').animate({
            scrollTop: $("#About").offset().top
        }, 2000);
    });
    
    $(".nav.navbar-nav li:eq(2) a").click(function () {
        $('html, body').animate({
            scrollTop: $("#Skill").offset().top
        }, 2000);
    });

    $(".nav.navbar-nav li:eq(3) a").click(function () {
        $('html, body').animate({
            scrollTop: $("#Portfolio").offset().top
        }, 2000);
    });

    $(".nav.navbar-nav li:eq(4) a").click(function () {
        $('html, body').animate({
            scrollTop: $("#Contact").offset().top
        }, 2000);
    });

    $(".contact").click(function () {
        $('html, body').animate({
            scrollTop: $("#Contact").offset().top
        }, 2000);
    });

});