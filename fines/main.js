$(document).ready(function(){
	$(".cross").click(function() {
		$(this).toggleClass("cross-close");
		$(this).siblings(".wrapper-size-description").toggle("slow");
		$(this).siblings(".wrapper-size-h").toggleClass("h3-active");
		console.log($(this).next());
	});

	$('.header-logo').click(function() {
		location.reload();
	});

	$('.footer-logo').click(function() {
		location.reload();
	});

	//popup
	$(".oppen-popup").click(function() {
		$(".popup").show("slow");
	});

	$(".oppen-popup-p").click(function() {
		$(".popup-p").show("slow");
	});

	$(".popup-cross").click(function() {
		$(".popup").hide("slow");
	});

	$(".popup-cross-p").click(function() {
		$(".popup-p").hide("slow");
	});

	$(".wrapper-phone-b").click(function() {
		$(".wrapper-form-phone").toggle("slow");
	});

	//button-phone
	function isVisible(tag) {
		var t = $(tag);
		var w = $(window);
		var wt = w.scrollTop();
		var tt = t.offset().top;
		var tb = tt + t.height();
		return (tt >= wt);
	}

	$(window).scroll(function () {
		var b = $("#website");
		if (isVisible(b)) {
			$(".wrapper-phone-b").show("slow");
		}
	});

	//ajax
	$(".popup-form-ch").submit(function() {
		var form_data = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "res.php",
			data: form_data,
			error: function (request, error) {
				
			},
			success: function() {
				$(".popup").hide();
				setTimeout(function() { document.location.href = "http:./success.html"; }, 1000);
			}
		});
		return false;
	});//end first popup

	$(".popup-form-p").submit(function() {
		var form_data = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "res-2.php",
			data: form_data,
			error: function (request, error) {

			},
			success: function() {
				setTimeout(function() { document.location.href = "http:./success-2.html"; }, 1000);
			}
		});
		return false;
	});//end second popup

	$(".form").submit(function() {
		var form_data = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "res-3.php",
			data: form_data,
			error: function (request, error) {

			},
			success: function() {
				setTimeout(function() { document.location.href = "http:./success.html"; }, 1000);
			}
		});
		return false;
	});//end popup

	$(".success-form").submit(function() {
		var form_data = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "res-2.php",
			data: form_data,
			error: function (request, error) {
				
			},
			success: function() {
				timer();
			}
		});
		return false;
	});//end success form

	//timer
	function timer() {
		var minut = $(".minut");
		var second1 = $(".second-1");
		var second2 = $(".second-2");
		var countMinut = 2;
		var countSecond1 = 5;
		var countSecond2 = 9;
		setTime();

		function setTime() {
			minut.html(countMinut);
			second1.html(countSecond1);
			second2.html(countSecond2);
		}

		function chageTime() {
			--countSecond2;
			if(countSecond2 == 0) {
				countSecond2 = 9;
				--countSecond1;
				if(countSecond1 == 0) {
					countSecond1 = 5;
					--countMinut;
					if(countMinut == 0) {
						clearInterval(myTimer);
					}
				}
			}
			setTime();
		}

		var myTimer = setInterval(function() {
			chageTime();
		}, 1000);
	}
});