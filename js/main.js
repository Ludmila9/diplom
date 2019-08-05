;(function($) {
    "use strict";
    
    $('.hero-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
        arrows: false,
		infinity: true,
		autoplay: false,
		autoplaySpeed: 1000,
		fade: true,
		cssEase: 'linear',
		speed: 500,
		arrows: true,
		// appendDots: '.hero__dots',
    });

	$('.expert-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		dots: true,
		arrows: false,
		infinity: true,
		autoplay: false,
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

	
	

})(jQuery); 




// circle on / out

// // В консоль все выводится, но не срабатывает
// let item = document.querySelectorAll('.head-soc__item');	
// let circle = document.getElementById('circle');
// // let circle = item.children[0].children
// let circleParent = circle.parentNode;
// console.log(circleParent);
// let circleLength = circle.getTotalLength();
// console.log(circleLength);
// for (var i = 0; i < item.length; i ++); {

// 	if (item.type == 'mouseover') {
// 		item[i].onmouseover = function(){
// 			circle.classList.add('fill');
// 		};
// 	};
// 	if (item.type == 'mouseover') {
// 		item[i].onmouseout = function(){
// 			circle.classList.remove('fill');
// 		};
// 	};
// }; 

// item.onmouseover = function(){	
// 	item.children[0].children.classList.add('fill');
// };
// item.onmouseout = function(){
// 	item.children[0].children.classList.remove('fill');
// };
// console.log(item);
// console.log(circle);
// // console.log(circleLength);
// console.log(item.children[0].children);
// console.log(circleParent);
// console.log(circleParent.parentNode);




// // Пыталась достучаться до ребенка каждой li-шки,
// // консоль пишет ошибку: Uncaught TypeError: item.getElementsByClassName is not a function

// let item = document.getElementsByClassName('.head-soc__item');
// let childItem = item.getElementsByClassName('.icon-circle');
// let circle = childItem.getElementById('#circle');
// console.log(item);
// console.log(childItem);
// console.log(circle);

// // for (var i = 0; i < item.length; i ++); {
// 	item.onmouseover = function(){	
// 		circle.classList.add('fill');
// 	};
// 	item.onmouseout = function(){
// 		circle.classList.remove('fill');
// 	};
// // };




// // Если прописать так, то:
// // 1) срабатывает только onmouseover, onmouseout срабатывает
// // только на первом элементе
// // 2) срабатывает сразу на всех элементах
// let circle = document.querySelector('.head-soc__item > .icon-circle > #circle');
// //или так: let circle = document.getElementById('circle');
// console.log(circle);
// let circleLength = circle.getTotalLength();
// console.log(circleLength);
// circle.onmouseover = function(){	
// 	this.classList.add('fill');
// };
// circle.onmouseout = function(){
// 	this.classList.remove('fill');
// };




// Пыталась создать массив, присвоить item каждый элемент из цикла по этому массиву, 
// при console.log(item);	выводит undefined
// let items = document.querySelector('.head-soc__item');

// // console.log(items);
// // console.log(childItem);
// // console.log(circle);
// // console.log(circleLength);
// for (var i = 0; i < items.length; i ++); {
// 	let item = items[i];
// 	// console.log(item);		//выводит undefined
// 	let childItem = item.querySelector('.icon-circle');
// 	let circle = childItem.querySelector('#circle');
// 	let circleLength = circle.getTotalLength();
// 	item.onmouseover = function(){	
// 		circle.classList.add('fill');
// 	};
// 	item.onmouseout = function(){
// 		circle.classList.remove('fill');
// 	};
// };
