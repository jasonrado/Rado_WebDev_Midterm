$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 600) {
            $("body").addClass("active");
        } else {
           $("body").removeClass("active");
        }
    });
});