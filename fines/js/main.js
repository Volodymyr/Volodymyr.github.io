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
				$(".popup").hide();
				$(".masseges-r").show(function() {
					setTimeout(function(){ $(".masseges-r").hide('slow') }, 5000);
				});
			},
			success: function() {
				$(".popup").hide();
				document.location.href = "http:./success.html";
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
				$(".popup").hide();
				$(".masseges-r").show(function() {
					setTimeout(function(){ $(".masseges-r").hide('slow') }, 5000);
				});
			},
			success: function() {
				$(".popup-p").hide();
				document.location.href = "http:./success.html";
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
				$(".masseges-r").show(function() {
					setTimeout(function(){ $(".masseges-r").hide('slow') }, 5000);
				});
			},
			success: function() {
				document.location.href = "http:./success.html";
			}
		});
		return false;
	});//end popup
});