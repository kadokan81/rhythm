'use strict';
console.log('connected');

const swiper = new Swiper('.swiper-reviews', {
	// Optional parameters
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	// Navigation arrows
	// navigation: {
	// 	nextEl: '.swiper-button-next',
	// 	prevEl: '.swiper-button-prev',
	// },

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});
