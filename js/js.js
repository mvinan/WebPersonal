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
	window.scrollTo(0,0);

window.setTimeout(function(){
		//aqui esta el codigo que ejecuta las animaciones

		jQuery(function($) {
			//poniendo tiempos para el header salga en secuencia
			window.setTimeout(function(){
				$('.Header-item:nth-child(2)').waypoint(function(){
					$(this).toggleClass('bounceInLeft animated');},
					{
						offset:'70%',
						triggerOnce:true
				});
			}, 500);
			window.setTimeout(function(){
				$('.Header-item:nth-child(3)').waypoint(function(){
					$(this).toggleClass('bounceInLeft animated');},
					{
						offset:'70%',
						triggerOnce:true
				});
			}, 700);
			window.setTimeout(function(){
				$('.Header-item:nth-child(4)').waypoint(function(){
					$(this).toggleClass('bounceInLeft animated');},
					{
						offset:'70%',
						triggerOnce:true
				});
			}, 900);

			//inician las nimaciones de Home
			$('.Home-logo').waypoint(function() {
				$(this).toggleClass( 'bounceInDown animated' );
				},
				{
					offset: '50%',
					triggerOnce: true
				});
			$('.Home-link').waypoint(function(){
				$(this).toggleClass('fadeInRightBig animated');},
				{
					offset:'70%',
					triggerOnce:true
			});
			$('.Home-boxName').waypoint(function(){
				$(this).toggleClass('bounceInUp animated');},
				{
					offset:'70%',
					triggerOnce:true
			});
			$('.Profile-link').waypoint(function(){
				$(this).toggleClass('bounceInLeft animated');},
				{
					offset:'70%',
					triggerOnce:true
			});

		});
		// hasta aqui es el codigo ejecutador de animated.css
}, 500);

//Termina la funcion start
}
