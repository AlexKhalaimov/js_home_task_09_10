$(function() {
    $(".jcarousel").jcarousel({
        list: ".jcarousel-list"
    }

);
    $(".jcarousel-prev").jcarouselControl({
        target: '-=1'
    });

    $(".jcarousel-next").jcarouselControl({
        target: '+=1'
    });
});
