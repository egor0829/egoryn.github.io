$(function(){
    "use strict";
    
    $(".info").click(function() {
        $(".contacts").toggleClass('open');
    });
    
    $('.indicator').each(function(){
        let width = $(this).data('skill');
        $(this).css('width', width);
    });
    
    $(".menu-btn").click(function() {
        $(".main-nav").toggleClass('main-nav-open');
        $(".menu-btn").toggleClass('img-rotate');
    });
}); 