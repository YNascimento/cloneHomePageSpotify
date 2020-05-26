$(document).ready(function() {
    $(window).scroll(function() {
        var $bg = $(".bg-transparente");
        var $link = $(".navbar-dark .navbar-nav .nav-link")
        var $divisor = $(".divisor")
        
        $bg.toggleClass('scrolled', $(this).scrollTop()>100);
        $link.toggleClass('scrolled', $(this).scrollTop()>100);
        $divisor.toggleClass('scrolled', $(this).scrollTop()>100);
    });
});
