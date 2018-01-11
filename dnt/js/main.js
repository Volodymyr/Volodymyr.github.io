$(document).ready(function(){
    //переход к якорю
    $(".nav").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    //мобильное меню
    $(".nav-btn").click(function() {
        $(".nav").toggle();
    });

    // ajax
	$(".form").submit(function() {
		var form_data = $(this).serialize();
		$.ajax({
		type: "POST",
		url: "res.php",
		data: form_data,
			error: function (request, error) {
				alert("error");
			},
			success: function() {
				alert("ok!");
			}
		});
		return false;
	});
});