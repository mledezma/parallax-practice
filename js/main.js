$(window).scroll(function() {
    var wScroll = $(this).scrollTop();

    $('.logo').css({
        'transform': 'translate(0px, '+ wScroll/(2-0.5) +'%)'
    });

    $('.back-girl').css({
        'transform': 'translate(0px, '+ wScroll/10 +'%)'
    });

    $('.fore-dog').css({
        'transform': 'translate(0px, -'+ wScroll/70 +'%)'
    });
    console.log(wScroll);
});