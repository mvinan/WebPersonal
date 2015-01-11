$(document).ready(inicio);

function inicio(){
	$('.Header-btMenu').click(function(){
		$('.Header-nav').slideToggle('slow');
	});

	$("#slider3").responsiveSlides({
		manualControls: '#slider3-pager',
		maxwidth: 800
	});
	var $win = $(window);