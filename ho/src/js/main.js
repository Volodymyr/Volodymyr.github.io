$(document).ready(function(){
//smooth scrolling
  function smoothScroll(element) {
    event.preventDefault();
    var id  = $(element).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  }

  $(".header").on("click","a", function (event) {
    smoothScroll(this);
  });
//end smooth scrolling

//send form
  $("#contact-submit").click(function(){
    sendAjaxForm('result_form', 'ajax_form', 'ajax_form.php');
    return false; 
  });

  function sendAjaxForm(result_form, ajax_form, url) {
    jQuery.ajax({
      url: url,
      type: "POST",
      dataType: "html",
      data: jQuery("#"+ajax_form).serialize(),
      success: function(response) {
        result = jQuery.parseJSON(response);
        document.getElementById(result_form).innerHTML = "Имя: "+result.name+"<br>Телефон: "+result.phone+"<br>Email:"+result.mail+"<br>Сообщение:"+result.text;
      },
      error: function(response) {
        document.getElementById(result_form).innerHTML = "Ошибка. Данные не отправленны.";
      }
    });
  }

//end sebd form
});