/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
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
    $('.navbar-toggle:visible').click();
});


//add subnav on hover over Style section

//old code for reference
/* var timer;
$('.subnav-trigger').hover(function(){
		
	$('.subnav').removeClass('hidden');},
	 
	 function(){
	timer = setTimeout(function(){$('.subnav').addClass('hidden');}, 250);});
	
		
	$('.subnav').hover(
        function(){
            clearTimeout(timer);
        }, function(){
            $('.subnav').removeClass('hidden');});
*/

$('.subnav-trigger').mouseenter(function() {
	$('.subnav').removeClass('hidden');}

).mouseleave(function() {
	$('.subnav').addClass('hidden');}
	
	);


$('.subnav').mouseenter(function() {
	$('.subnav').removeClass('hidden');}


).mouseleave(function() {
	$('.subnav').addClass('hidden');}
	
	);
	
			