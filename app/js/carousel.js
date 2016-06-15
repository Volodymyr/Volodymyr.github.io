$(document).ready( function() {
  var countSpan = Math.ceil( $(".slider img").size()/3 );

  $(".product").append("<div id='slider-nav' class='nav'></div>");

  for(var i=0; i < countSpan; i++) {
    $(".nav").append("<span class='"+ i +"'></span>");
  }

  $(".nav span").first().addClass("on");
});

$( document ).on( "click", ".nav span",function( event ) {
  $(".nav span").removeClass("on");
  cheng($( event.target ));
  $( event.target ).closest( "span" ).addClass("on");
});

function cheng(sp) {
  var step = 0;
  if(sp.attr("class") == 0) {
    step=0;
  }else {
    var step = $(".slider").width() * sp.attr("class") + 30 ;
  }
  $(".slider ul").animate({marginLeft: "-"+ step},500)
}