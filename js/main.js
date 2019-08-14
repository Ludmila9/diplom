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
		speed: 200,
		arrows: true,
		prevArrow: $('.slick-btn-prev'),
        nextArrow: $('.slick-btn-next'),
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

	
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1800);
		return false;
	});

})(jQuery); 




// circle on / out

// В консоль все выводится, но не срабатывает
// let item = document.querySelectorAll('.head-soc__item');	
// let circle = document.querySelectorAll('circle');
// let circle = item.children[0].children
// let circleParent = circle.parentNode;
// console.log(circleParent);
// let circleLength = circle.getTotalLength();
// console.log(circleLength);
// for (let i=0; i < item.length; i++) {
	// console.log(item[i])
	//if (item.type == 'mouseover') {
		// item[i].onmouseover = function(){
			
		// 	this.children[0].children[0].classList.add('fill');
		// };
	//};
	//if (item.type == 'mouseover') {
		// item[i].onmouseout = function(){
		// 	this.children[0].children[0].classList.remove('fill');
		// };
	//};
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


let item = document.querySelectorAll('.head-soc__item');
let itemFoot = document.querySelectorAll('.footer-soc__item');
let circle = document.querySelector('.circle');
let circleLength = circle.getTotalLength();
console.log(circleLength);

for (let i=0; i < item.length; i++) {
	console.log(item[i])
	item[i].onmouseover = function(){
		this.children[0].children[0].classList.add('fill');
	};
	item[i].onmouseout = function(){
		this.children[0].children[0].classList.remove('fill');
	};
};
for (let i=0; i < itemFoot.length; i++) {
	console.log(itemFoot[i])
	itemFoot[i].onmouseover = function(){
		this.children[0].children[0].classList.add('fill');
	};
	itemFoot[i].onmouseout = function(){
		this.children[0].children[0].classList.remove('fill');
	};
};


let btn = document.querySelectorAll('.slick-btn');	
console.log(btn);
let btnCircle = document.querySelector('.slick-circle');
console.log(btnCircle);
let btnCircleLength = btnCircle.getTotalLength();
console.log(btnCircleLength);

for (let i=0; i < btn.length; i++) {
	console.log(btn[i])
	btn[i].onmouseover = function(){
		this.children[0].children[0].classList.add('fill');
	};
	btn[i].onmouseout = function(){
		this.children[0].children[0].classList.remove('fill');
	};
}; 


let card = document.querySelectorAll('.product-card');
// let cardHeight = card.height();
// console.log(card);
// console.log(cardHeight);
let productButton = document.querySelectorAll('.product-button');
// console.log(productButton);
let cardUp = document.querySelector('#product-card-5 a');
console.log(cardUp);

for (let i=0; i < card.length; i++) {
	// console.log(card[i]);
	let cardHeight = card[0].scrollHeight;
	// console.log(cardHeight);
	productButton[i].onclick = function(){

		card[i+1].style.display='flex';
		window.scrollBy({ top: cardHeight, behavior: 'smooth' });
	};
	// var height = $(window).height();
	// $(window).scrollTop(height);
	// productButton[i].onclick = function(){
	// 	card[i+1].classList.add('open');
	// };

	cardUp.onclick = function(){
		card[1].style.display='none';
		card[2].style.display='none';
		card[3].style.display='none';
		card[4].style.display='none';
		console.log(card[i]);
	};
};


let box = document.querySelectorAll('.portfolio-box');
// console.log(box);
let boxBack = document.querySelectorAll('.portfolio-box-back');
// console.log(boxBack);
let portfolioButton = document.querySelectorAll('.portfolio__nav');
// console.log(portfolioButton);
let portfolioButtonBack = document.querySelectorAll('.portfolio__btn-back');
// console.log(portfolioButtonBack);


portfolioButton.onclick = function(){
	box.classList.add('rotate');
	boxBack.classList.add('rotate-back');

}
for (let i=0; i < box.length; i++) {
	console.log(box[i])
	portfolioButton.onclick = function(){
		box.classList.add('rotate');
	};
};
for (let i=0; i < boxBack.length; i++) {
	console.log(boxBack[i])
	portfolioButton.onclick = function(){
		box.classList.add('rotate-back');
	};
};