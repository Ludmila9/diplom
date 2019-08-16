;(function($) {
    "use strict";
    
    $('.hero-slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
        arrows: false,
		infinity: true,
		autoplay: true,
		autoplaySpeed: 2000,
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
		autoplay: true,
		autoplaySpeed: 1000,
		cssEase: 'ease-out',
		speed: 1500,
		responsive: [
		    {
		      breakpoint: 1300,
		      settings: {
		        slidesToShow: 2,
		        // slidesToScroll: 1,
		        // infinite: true,
		        // 
		      }
		    },
		    {
		      breakpoint: 990,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        dots: false,
		      }
		    },
		    {
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        dots: false,
		      }
		    }
		  ]
        // appendDots: '.hero-slider__check',
    });



	
	var $page = $('html, body');
	$('a[href*="#"]').click(function() {
		$page.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
		}, 1800);
		return false;
	});



	$(window).scroll(function() {
		if ($(this).scrollTop() > $(this).height()) {
			$('.top').addClass('active');
		} else {
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});


	$(window).on('load', function() {
		$('.preloader').delay(1000).fadeOut('slow');
	});


	
})(jQuery); 




// circle on / out



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
let productButton = document.querySelectorAll('.product-button');
let cardUp = document.querySelector('#product-card-5 a');
console.log(cardUp);

for (let i=0; i < card.length; i++) {
	let cardHeight = card[0].scrollHeight;
	productButton[i].onclick = function(){
		card[i+1].style.display='flex';
		// window.scrollBy({ top: cardHeight, behavior: 'smooth' });
		// немного уменьшает размер прокрутки
		window.scrollBy({ top: cardHeight + 50, behavior: 'smooth' }); 
	};

	cardUp.onclick = function(){

		// card[1].style.display='none';
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


// portfolioButton.onclick = function(){
// 	box.classList.add('rotate');
// 	boxBack.classList.add('rotate-back');

// }
// for (let i=0; i < box.length; i++) {
// 	console.log(box[i])
// 	portfolioButton.onclick = function(){
// 		box.classList.add('rotate');
// 	};
// };
// for (let i=0; i < boxBack.length; i++) {
// 	console.log(boxBack[i])
// 	portfolioButton.onclick = function(){
// 		box.classList.add('rotate-back');
// 	};
// };