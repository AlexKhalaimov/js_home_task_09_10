$(function () {
    $(".dropdown").mouseover( function () {
        $(this).children(".sub_menu").stop().slideDown(400);
    });

    $(".dropdown").mouseleave(function(){
        $(this).children(".sub_menu").stop().slideUp(400);
    });

    $(".jcarousel").jcarousel({
        list: ".jcarousel-list",
        wrap: 'circular'
    }

);
    $(".jcarousel-prev").jcarouselControl({
        target: '-=1'
    });

    $(".jcarousel-next").jcarouselControl({
        target: '+=1'
    });

    $('select').styler(

    );
    $('.js-check input').ezMark();
});
