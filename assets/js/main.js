// sidebar toggle 
// function toggleSidebar() {
// 	$(".primary_nav").toggleClass("toggleActive");
// }
$(".toggle_bars_btn").click(function () {
	$(".primary_nav").toggleClass("toggleActive");
});

$("#current_year").text((new Date).getFullYear());
// client slider
var swiper = new Swiper('.client_slider', {
	speed: 500,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
	breakpoints: {
		320: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		768: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
		1024: {
			slidesPerView: 6,
			spaceBetween: 40,
		},
	}
});
// product slider
var swiper = new Swiper('.product_slider', {
	speed: 300,
	spaceBetween: 0,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	}
});
// people slider
var swiper = new Swiper('.people_slider', {
	speed: 2000,
	spaceBetween: 30,
	grabCursor: true,
	keyboard: {
		enabled: true,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	autoplay: {
		delay: 1000,
		disableOnInteraction: false,
	},
	breakpoints: {
		320: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 2,
		},
	}
});
// banner slider
var swiper = new Swiper('.banner_slider', {
	speed: 1000,
	spaceBetween: 30,
	effect: 'fade',
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	keyboard: {
		enabled: true,
	},
	autoplay: {
		delay: 1500,
		disableOnInteraction: false,
	},
});
