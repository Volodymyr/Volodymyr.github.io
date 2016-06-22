$(document).ready(function () {
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
});