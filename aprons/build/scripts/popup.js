$(function() {
  $("#show-popup").click(function() {
    $("#open-modal").show();
  });

  $("#open-modal").click(function(event) {
    if(event.target.id == "open-modal" || event.target.id == "cross") {
      $("#open-modal").hide();
    }
  });

});