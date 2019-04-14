/* $ global, var, alert */

$(document).ready(function () {

    'use strict';

    /*=====================================
    Start Parallax - Intro
    =====================================*/

    $(".parallax .header .toggle").on('click', function () {

        $(".parallax .header .links ul li").css({

            'margin-right': 0

        });

        $(".parallax .header .toggle").fadeOut(400);

    });

    $(".close-links").on('click', function () {

        $(".parallax .header .links ul li").css("margin-right", "-170px");
        $(".parallax .header .toggle").fadeIn(400);


    });


    var headerScroll = $(".header-scroll");

    $(window).scroll(function () {

        if ($(this).scrollTop() >= 500) {

            headerScroll.addClass('show_header');

        } else {
            headerScroll.removeClass('show_header');
        }
    });

    /*=====================================
    End Parallax - Intro
    =====================================*/




    /*=====================================
     Start Portfolio
     =====================================*/

    $("#container").mixItUp();

    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {enabled: true}
        // other options
    });

    /*=====================================
     End Portfolio
     =====================================*/




	/*=====================================
    Start Testimonials
    =====================================*/

	$(".testimonials #owl-testimonials").owlCarousel({

		autoPlay: 4000, //Set AutoPlay to 3 seconds
		items: 1,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [979, 1]

	});

	/*=====================================
    End Testimonials
    =====================================*/


    /*=====================================
    Smooth Scroll
    =====================================*/
	smoothScroll.init({
		speed: 800,
        offset: 50
	});

    /*=====================================
    End Smooth Scroll
    =====================================*/



    /*=====================================
    Scroll top
    =====================================*/

	var scrollTop = $("#scroll-top");

	$(window).scroll(function () {

		if ($(this).scrollTop() >= 300) {

			scrollTop.fadeIn(700);

		} else {
			scrollTop.fadeOut(700);
		}
	});

	// Click on Button To Scroll Top

	scrollTop.on('click', function () {

		$("html,body").animate({
			scrollTop: 0
		}, 900);
	});

    /*=====================================
    End Scroll top
    =====================================*/


});


/*=====================================
Start Loading
=====================================*/

$(window).on('load', function () {

    $('.loading .sk-folding-cube').fadeOut(3000, function () {

        $(this).parent().fadeOut(1000);

    });
});

/*=====================================
End Loading
=====================================*/