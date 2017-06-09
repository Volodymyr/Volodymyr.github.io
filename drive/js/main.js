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
		slidesToShow: 6,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 1282,
			settings: {
				arrows: false,
				slidesToShow: 4
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

	$('.reviews-slider').slick({
		slidesToShow: 6,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		slidesToScroll: 3,
		responsive: [
		{
			breakpoint: 1282,
			settings: {
				arrows: false,
				slidesToShow: 4
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

	//Links

	$(document).ready(function(){
		$(".navbar-nav").on("click","a", function (event) {
			//отменяем стандартную обработку нажатия по ссылке
			event.preventDefault();

			//забираем идентификатор бока с атрибута href
			var id  = $(this).attr('href'),

			//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;

			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({scrollTop: top}, 1500);
		});
	});

	//gallery

	$('.grid').masonry({
		itemSelector: '.grid-item'
	});
});