$( window ).load(function() {
	$('.grid').masonry({
		itemSelector: '.grid-item'
	});
});

$(document).ready(function(){
		//gallery

	// $('.grid').masonry({
	// 	itemSelector: '.grid-item'
	// });

	//slick
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
		slidesToScroll: 1,
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
		slidesToScroll: 1,
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

	//popap
	$(".popup-show").click(function() {
		$(".show-form").show('slow');
	});

	$(".form").click(function() {
		event.stopPropagation();
	});

	$(".clouse-popup").click(function() {
		$(".popup").hide('slow');
	});

	$(".end-succses").click(function() {
		$(".succsec-popap").hide('slow');
	});

	// ajax
	$(".form").submit(function() {
		var form_data = $(this).serialize();
		$.ajax({
		type: "POST",
		url: "res.php",
		data: form_data,
			error: function (request, error) {
				$(".popup").hide();
				alert('error');
			},
			success: function() {
				$(".popup").hide();
				$(".succsec-popap").show('slow');
			}
		});
		return false;
	});
});