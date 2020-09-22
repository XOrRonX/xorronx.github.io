/*
	Solid State by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/



(function($) {


	jQuery("#about").click(function(){
		jQuery('html, body').animate({
			scrollTop: jQuery('#one').offset().top - 80
		}, 900);
		jQuery('#one').trigger("click");
		jQuery('#one').focus();
        jQuery('#one').select();
	});

	jQuery("#GetInTouch").click(function(){
		jQuery('html, body').animate({
			scrollTop: jQuery('#footer').offset().top - 15
		}, 700);
		jQuery('#footer').trigger("click");
		jQuery('#footer').focus();
        jQuery('#footer').select();
	});

	jQuery("#oneAbout").click(function(){
		jQuery('html, body').animate({
			scrollTop: jQuery('#oneExperience').offset().top - 450
		}, 900);
		jQuery('#oneExperience').focus();
	});

	jQuery("#oneExperience").click(function(){
		jQuery('html, body').animate({
			scrollTop: jQuery('#oneTechnicalKnowledge').offset().top - 450
		}, 900);
		jQuery('#oneTechnicalKnowledge').focus();
	});

	jQuery("#oneTechnicalKnowledge").click(function(){
		jQuery('html, body').animate({
			scrollTop: jQuery('#four').offset().top - 15
		}, 900);
		jQuery('#four').focus();
	});

	jQuery("#getintouch").click(function(){
		jQuery('html, body').animate({
			scrollTop: jQuery('#footer').offset().top - 15
		}, 900);
		jQuery('#footer').trigger("click");
		jQuery('#footer').focus();
        jQuery('#footer').select();
	});



	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// Menu.
		var $menu = $('#menu');

		

		$menu._locked = false;

		$menu._lock = function() {

			if ($menu._locked)
				return false;

			$menu._locked = true;

			window.setTimeout(function() {
				$menu._locked = false;
			}, 350);

			return true;

		};

		$menu._show = function() {

			if ($menu._lock())
				$body.addClass('is-menu-visible');

		};

		$menu._hide = function() {

			if ($menu._lock())
				$body.removeClass('is-menu-visible');

		};

		$menu._toggle = function() {

			if ($menu._lock())
				$body.toggleClass('is-menu-visible');

		};

		$menu
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$menu._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$menu._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$menu._hide();
				});

		$body
			.on('click', 'a[href="#menu"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$menu._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$menu._hide();

			});

})(jQuery);