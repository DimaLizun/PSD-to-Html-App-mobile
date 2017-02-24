$(function() {


	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	$('.hand-head').addClass('animated bounceInRight');

	var $menu = $("#my-menu").mmenu({
   //   options
 	});
 	
	var $icon = $("#my-icon");
	var API = $menu.data( "mmenu" );

	$icon.on( "click", function() {
		API.open();
	});

	API.bind( "opened", function() {
		setTimeout(function() {
			$icon.addClass( "is-active" );
		}, 100);
	});

	API.bind( "closed", function() {
		setTimeout(function() {
			$icon.removeClass( "is-active" );
		}, 100);
	});


});


