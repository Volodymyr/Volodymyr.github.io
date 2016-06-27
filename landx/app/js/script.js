$(document).ready(function () {
  //popap
  $("#popap-open").on('click', function(event) {
    event.preventDefault();
    $(".popap").show();
  });

  $(".clouse").on('click', function() {
    $(".popap").hide();
  });

  $(".popap").on('click', function(event) {
    if(event.target.nodeName !="SECTION") return false;
    $(".popap").hide();
  });


  //message
  $(".header-submit").on('click', function() {
    targetMessage();
  });

  $(".table-btn").on('click', function() {
    targetMessage();
  });

  function targetMessage() {
    $('.message').show("slow");
    setTimeout(function(){
      $('.message').hide("slow");;
    }, 3000);
  }

  //kill form
  $("form").submit(function(){return false;})
});