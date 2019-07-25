;(function($) {
    "use strict";
    
	$('.expert-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
        arrows: false,
        infinity: true,
        autoplay: true,
        autoplaySpeed: 1000,
        cssEase: 'ease-out',
        speed: 1500,
        // appendDots: '.hero-slider__check',
    });

 //    $('.hero-slider').on('afterChange', function(event, slick, currentSlide, nextSlide){
 //        console.log(currentSlide);
 //      });

	  
	// //   add masonry
	//   $('.portfolio-examp').masonry({
	// 	itemSelector: '.portfolio-item',
	// });


	// // add isotope
	// $('.portfolio-examp').isotope();

	// var filters = [];

	// $('.portfolio-navi').on('click', 'a', function(event) {
	// 	event.preventDefault();
	// 	$(this).toggleClass('active');

	// 	var isChecked = $(this).hasClass('active');

	// 	var filter = $(this).attr('data-filter');

	// 	if (isChecked) {
	// 		addFilter(filter);
	// 	} else {
	// 		removeFilter(filter);
	// 	}

	// 	console.log(filters);
	// 	$('.portfolio-examp').isotope({
	// 		filter: filters.join(',')
	// 	});
	// });

	// function addFilter( filter ) {
	//   if ( filters.indexOf( filter ) == -1 ) {
	//     filters.push( filter );
	//   }
	// }

	// function removeFilter( filter ) {
	//   var index = filters.indexOf( filter);
	//   if ( index != -1 ) {
	//     filters.splice( index, 1 );
	//   }
	// }

	//new slider
	// $('.ba-slider-new').masonry({
	// 	itemSelector: '.portfolio-item',
	// });
	//  function initSlider() {
	//  	$('.ba-slider-new').slick({
	// 	  slidesToShow: 1,
	// 	  slidesToScroll: 1,
	// 	  arrows: false,
	// 	  fade: true,
	// 	  asNavFor: '.ba-slider-new-nav'
	// 	});
		
	//  };
	//  $('.ba-slider-new-nav').slick({
	// 	  slidesToShow: 6,
	// 	  slidesToScroll: 1,
	// 	  asNavFor: '.ba-slider-new',
	// 	  dots: false,
	// 	  // centerMode: true,
	// 	  focusOnSelect: true
	// 	});
		
	//  $('.items-navi button').on('click', function(){
	//  	initSlider();
	//  	$('.items-navi button').addClass('nav-btn');
	//  })

	
})(jQuery); 
    