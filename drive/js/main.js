$(document).ready(function(){
	$('.watercraft-slider').slick({
		slidesToShow: 5,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		responsive: [
		{
			breakpoint: 1282,
			settings: {
				arrows: false,
				slidesToShow: 3
			}
		},
		{
			breakpoint: 1005,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}
		]
	});

	$('.sea-slider').slick({
		slidesToShow: 4,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		slidesToScroll: 2,
		responsive: [
		{
			breakpoint: 1282,
			settings: {
				arrows: false,
				slidesToShow: 3
			}
		},
		{
			breakpoint: 1005,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}
		]
	});
});