$(document).ready(function () {
    /******************************
     BOTTOM SCROLL TOP BUTTON
     ******************************/

        // declare variable
    var scrollTop = $(".scrollTop");

    $(window).scroll(function () {
        // declare variable
        var topPos = $(this).scrollTop();

        // if user scrolls down - show scroll to top button
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");

        } else {
            $(scrollTop).css("opacity", "0");
        }

    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 800);
        return false;

    }); // click() scroll top EMD
});

// Active class navigation

// $(document).ready(function () {
//    $(".nav__mega-link").click(function () {
//        $(".nav__mega-link").toggleClass("active")
//    });
// });

//Toggle sidebar

$(document).ready(function () {
   $(".nav__book-list").click(function () {
       $(".nav__book-box").animate({
            height : 'toggle'
       });
   });
});
// Toggle cart


$(document).ready(function () {
    $(".btn__cart").click(function () {
        $(".cart__hover").toggleClass("open");
    });
});
//** Sticky Navigation

//creat variable class
fixHeight = $(".nav-fix-height");
var yourNavigation = $(".nav");
stickyDiv = "sticky";
headerMain = $('.header-main').height();
// Scroll navigation
$(window).scroll(function() {
    if( $(this).scrollTop() > headerMain ) {
        yourNavigation.addClass(stickyDiv);
        fixHeight.addClass("nav-fix");
    } else {
        yourNavigation.removeClass(stickyDiv);
        fixHeight.removeClass("nav-fix");
    }
});
// fix height





//*************************************** Owl Crousel
$('#owl-1.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    loop:true,
    margin:10,
    rewind: true,
    autoplay: true,
    autoplayTimeout:7000,
    responsiveClass:true,
    nav: true,
    navText: ["<span class=\"flex-next\" ><i class='fa fa-angle-left'></i></span>", "<span class=\"flex-prev\" ><i class='fa fa-angle-right'></i></span>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            loop:false
        }
    }
});

//Click modals
$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus()
});
/*
* CRS 2
* */
$('#owl-2.owl-carousel').owlCarousel({
    // animateOut: 'fadeOut',
    loop:true,
    margin:10,
    // rewind: true,
    // autoplay: true,
    autoplayTimeout:7000,
    responsiveClass:true,
    nav: true,
    navText: ["<span class=\"icon-next\" ><i class='fa fa-angle-left'></i></span>", "<span class=\"icon-prev\" ><i class='fa fa-angle-right'></i></span>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        484:{
            items:2,
            nav:true
        },
        768:{
            items:3,
            nav:true
        },
        992:{
            items:4,
            nav:true,
            // loop:false
        }
    }
});


//CRS 3
$('#owl-3.owl-carousel').owlCarousel({
    // animateOut: 'fadeOut',
    loop:true,
    margin:10,
    // rewind: true,
    // autoplay: true,
    autoplayTimeout:7000,
    responsiveClass:true,
    nav: true,
    navText: ["<span class=\"icon-next\" ><i class='fa fa-angle-left'></i></span>", "<span class=\"icon-prev\" ><i class='fa fa-angle-right'></i></span>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            // loop:false
        }
    }
});
//CRS 4
$('#owl-4.owl-carousel').owlCarousel({
    // animateOut: 'fadeOut',
    loop:true,
    margin:10,
    rewind: true,
    autoplay: true,
    autoplayTimeout:7000,
    responsiveClass:true,
    nav: true,
    navText: ["<span class=\"icon-next\" ><i class='fa fa-angle-left'></i></span>", "<span class=\"icon-prev\" ><i class='fa fa-angle-right'></i></span>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:true
        },
        1000:{
            items:1,
            nav:true,
            // loop:false
        }
    }
});


//CRS 5
$('#owl-5.owl-carousel').owlCarousel({
    // animateOut: 'fadeOut',
    loop:true,
    margin:10,
    // rewind: true,
    // autoplay: true,
    autoplayTimeout:7000,
    responsiveClass:true,
    nav: true,
    navText: ["<span class=\"icon-next\" ><i class='fa fa-angle-left'></i></span>", "<span class=\"icon-prev\" ><i class='fa fa-angle-right'></i></span>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:true,
            // loop:false
        }
    }
});

//CRS 6
$('#owl-6.owl-carousel').owlCarousel({
    // animateOut: 'fadeOut',
    loop:true,
    margin:10,
    // rewind: true,
    // autoplay: true,
    autoplayTimeout:7000,
    responsiveClass:true,
    nav: true,
    navText: ["<span class=\"icon-next\" ><i class='fa fa-angle-left'></i></span>", "<span class=\"icon-prev\" ><i class='fa fa-angle-right'></i></span>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        484:{
            items:2,
            nav:true
        },
        768:{
            items:3,
            nav:true
        },
        992:{
            items:3,
            nav:true,
            // loop:false
        }
    }
});

$('#owl-7.owl-carousel').owlCarousel({
    // animateOut: 'fadeOut',
    loop:true,
    margin:10,
    // rewind: true,
    // autoplay: true,
    autoplayTimeout:7000,
    responsiveClass:true,
    nav: true,
    navText: ["<span class=\"icon-next\" ><i class='fa fa-angle-left'></i></span>", "<span class=\"icon-prev\" ><i class='fa fa-angle-right'></i></span>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        484:{
            items:2,
            nav:true
        },
        768:{
            items:3,
            nav:true
        },
        992:{
            items:4,
            nav:true,
            // loop:false
        }
    }
});

$('#owl-8.owl-carousel').owlCarousel({
    // animateOut: 'fadeOut',
    loop:true,
    margin:10,
    // rewind: true,
    // autoplay: true,
    autoplayTimeout:7000,
    responsiveClass:true,
    nav: true,
    navText: ["<span class=\"icon-next\" ><i class='fa fa-angle-left'></i></span>", "<span class=\"icon-prev\" ><i class='fa fa-angle-right'></i></span>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        484:{
            items:2,
            nav:true
        },
        1000:{
            items:2,
            nav:true,
            // loop:false
        }
    }
});
$('#owl-9.owl-carousel').owlCarousel({
    // animateOut: 'fadeOut',
    loop:true,
    margin:10,
    // rewind: true,
    // autoplay: true,
    autoplayTimeout:7000,
    responsiveClass:true,
    nav: true,
    navText: ["<span class=\"icon-next\" ><i class='fa fa-angle-left'></i></span>", "<span class=\"icon-prev\" ><i class='fa fa-angle-right'></i></span>"],
    responsive:{
        0:{
            items:1,
            nav:true
        },
        484:{
            items:2,
            nav:true
        },
        1000:{
            items:4,
            nav:true,
            // loop:false
        }
    }
});