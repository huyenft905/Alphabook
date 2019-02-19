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