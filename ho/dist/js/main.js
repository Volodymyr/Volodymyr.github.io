$(document).ready(function(){function e(e){event.preventDefault();var t=$(e).attr("href"),r=$(t).offset().top;$("body,html").animate({scrollTop:r},1e3)}function t(e,t,r){jQuery.ajax({url:r,type:"POST",dataType:"html",data:jQuery("#"+t).serialize(),success:function(t){result=jQuery.parseJSON(t),document.getElementById(e).innerHTML="Имя: "+result.name+"<br>Телефон: "+result.phone+"<br>Email:"+result.mail+"<br>Сообщение:"+result.text},error:function(t){document.getElementById(e).innerHTML="Ошибка. Данные не отправленны."}})}$(".header").on("click","a",function(t){e(this)}),$("#contact-submit").click(function(){return t("result_form","ajax_form","ajax_form.php"),!1})});