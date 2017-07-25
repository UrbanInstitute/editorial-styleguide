/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */


// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
"use strict";
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $(".logo").addClass("logo-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $(".logo").removeClass("logo-collapse");

    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
"use strict";
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
"use strict";
    $('.navbar-toggle:visible').click();
});


//add subnav on hover over Style section

$('.subnav-trigger').mouseenter(function() {
"use strict";
	$('.subnav').removeClass('hidden');}

).mouseleave(function() {
"use strict";
	$('.subnav').addClass('hidden');}
	
	);


$('.subnav').mouseenter(function() {
"use strict";
	$('.subnav').removeClass('hidden');}

).mouseleave(function() {
"use strict";
$('.subnav').addClass('hidden');}	
);

var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
	"use strict";
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;

    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  };
}

$(".accordion").click(function(){
"use strict";
$(this).find("i").toggleClass("Animate");
});


