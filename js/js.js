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

			//inician las animaciones de Home
			$('.Home-logo').waypoint(function() {
				$(this).toggleClass( 'bounceInDown animated' );
				},
				{
					offset: '50%',
					triggerOnce: true
				});
			$('.Home-link').waypoint(function(){
				$(this).toggleClass('flipInX animated');},
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
				$(this).toggleClass('rotateInDownLeft animated');
				},
				{
					offset:'80%',
					triggerOnce:true,
			});


			$('.Profile-avatar').waypoint(function(){
				$(this).toggleClass('fadeInLeft animated');
				},
				{
					offset:'70%',
					triggerOnce:true,
			});
			$('.Profile-linkDescription').waypoint(function(){
				$(this).toggleClass('fadeInUp animated');
			},
			{
				offset:'70%',
				triggerOnce:true

			});
			$('.Profile-mision').waypoint(function(){
				$(this).toggleClass('fadeInRight animated');
			},
			{
				offset:'70%',
				triggerOnce:true

			});
			$('.Work-description').waypoint(function(){
				$(this).toggleClass('fadeInRight animated');
			},
			{
				offset:'80%',
				triggerOnce:true

			});
			$('.Skills-description').waypoint(function(){
				$(this).toggleClass('fadeInLeft animated');
			},
			{
				offset:'80%',
				triggerOnce:true

			});
			$('.Skills-icon').waypoint(function(){
				$(this).toggleClass('rotateIn animated');
			},
			{
				offset:'75%',
				triggerOnce:true

			});
			$('.Skills-icon').waypoint(function(){
				$('.Skills-objective').toggleClass('rotateIn animated');
				$('.Skills-objective').toggleClass('tada animated');
			},
			{
				offset:'75%',
				triggerOnce:true

			});
			$('.Skills-objective').waypoint(function(){
				$(this).toggleClass('fadeInDownBig animated');
			},
			{
				offset:'75%',
				triggerOnce:true

			});
			$('.Contact-title').waypoint(function(){
				$(this).toggleClass('fadeInLeftBig animated');
			},
			{
				offset:'75%',
				triggerOnce:true

			});
			$('.Contact-parrafo').waypoint(function(){
				$('.Hola-gratis').toggleClass('fadeInRight animated');
			},
			{
				offset:'90%',
				triggerOnce:true

			});
			$('.Contact-parrafo').waypoint(function(){
				$(this).toggleClass('tada animated');
			},
			{
				offset:'70%',
				triggerOnce:true

			});



		});
		// hasta aqui es el codigo ejecutador de animated.css
}, 500);

//Termina la funcion start
}

$(function(){

     $('a[href*=#]').click(function() {

     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
         && location.hostname == this.hostname) {

             var $target = $(this.hash);

             $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');

             if ($target.length) {

                 var targetOffset = $target.offset().top;

                 $('html,body').animate({scrollTop: targetOffset}, 1000);

                 return false;

            }

       }

   });

});
