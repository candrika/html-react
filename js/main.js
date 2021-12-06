$(window).on("load", function () {
    var winScroll = $(this).scrollTop();
    // winScroll = 0;
});

$(window).scroll(function () {
    var winScroll = $(this).scrollTop();
    console.log(winScroll);

    // start parallax
    $("#moto").css({
        "transform":"translate(0,"+ -winScroll +"%)"
    });

    $("#moto-describe").css({
        "transform":"translate(0,"+ -winScroll/2 +"%)"
    });
});