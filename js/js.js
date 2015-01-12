$(document).ready(inicio);



function inicio(){
	$('.Header-btMenu').click(function(){
		$('.Header-nav').slideToggle('slow');
	});

	$("#slider3").responsiveSlides({
		manualControls: '#slider3-pager',
		maxwidth: 800
	});
}

$(window).load(function() {
	
	// aparecer al terminar de cargar la pagina
	init();
	
});

function init() {
	
	// start up after 2sec no matter what
    window.setTimeout(function(){
        start();
    }, 1000);
}

// hora de aparacer :)
function start() {
	
	$('body').removeClass("loading").addClass('loaded');

	jQuery(function($) {
	$('.Home-link').waypoint(function() {
		$(this).toggleClass( 'fadeInRightBig animated' );
		},
		{
			offset: '70%',
			triggerOnce: true
		});
	});
}
