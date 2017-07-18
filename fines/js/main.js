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

	$(".oppen-popup").click(function() {
		$(".popup").show("slow");
	});

	$(".popup-cross").click(function() {
		$(".popup").hide("slow");
	});

	$(".wrapper-phone-b").click(function() {
		$(".wrapper-form-phone").toggle("slow");
	});

	function isVisible(tag) {
		var t = $(tag);
		var w = $(window);
		var wt = w.scrollTop();
		var tt = t.offset().top;
		var tb = tt + t.height();
		return ((tb <= wt + w.height()) && (tt >= wt));
	}

	$(window).scroll(function () {
		var b = $("#website");
		if (!b.prop("shown") && isVisible(b)) {
			b.prop("shown", true);
			$(".wrapper-phone-b").show("slow");
		}
	});
});