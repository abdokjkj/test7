
$(function(){

$("body").niceScroll({

cursorcolor: "black",
cursorwidth: "5px",
scrollspeed: 100

});

$(".fa-sort-down").on("click",function(){

$("html , body").animate({

scrollTop : 1000

},2000)

})

$('.slider').bxSlider({

pager : false

})

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})






});
