(function ($) {
    "use strict";
    var wWidth = $(window).width();

    jQuery(document).ready(function ($) {

        //-----menu------
        $(".nav-wrapper > ul > li, ul.dropdown li").on("mouseenter mouseleave", function () {
            $(this).toggleClass("dropdwon");
        });
        $(".pixinav .search_button, .pixinav .search-close").on("click", function () {
            $('.search-form').toggleClass('search-open');
        });
        $('.responsive-nav .nav-icon, .responsive-nav .nav-button-close').on("click", function () {
            $('.nav-wrapper').toggleClass('right-canvas');
        });

        $(".responsive-nav ul.dropdown ").on("click", function (e) {
            e.stopPropagation();
        });
        $('.responsive-nav .nav-wrapper  ul  li').on("click", function () {
            $(this).children('.mega_menu').slideToggle().css({
                "display": "flex"
            });
            $(this).children('ul').slideToggle();

        });
        $(".responsive-nav .nav-wrapper ul  li  a").on("click", function () {
            $(this).toggleClass("icon_rotated");
        });

    });

    $(window).load(function () {
            if (wWidth > 767) {

   var $grid =  $('.presentation_wrapper').isotope({
      itemSelector: '.single_item',
      masonry: {
        columnWidth: 10
      }
    });
            }
        });
    
      $grid.imagesLoaded().progress(function() {
            $grid.isotope('layout');

        });

    
    //--------Scroll Top---------
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.scroll_top').fadeIn();
            $('.scroll_top').removeClass('not_visible');
        } else {
            $('.scroll_top').fadeOut();
        }
    });
    $('.scroll_top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
    });


}(jQuery));
