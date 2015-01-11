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

	// $win.scroll(function(){
	// 	if ($win.scrollTop() == 0) {
	// 		alert("estamos en top");
	// 	}
	// });


}

//window.onload=function(){
//alert("imagenes, cargadas y listas");
//}