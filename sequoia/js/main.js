$(document).ready(function(){
   $(".main").onepage_scroll({
      sectionContainer: "section",
      easing: "ease",
      animationTime: 1000,
      pagination: true,
      updateURL: false,
      beforeMove: function(index) {},
      afterMove: function(index) {},
      loop: false,
      keyboard: true,
      responsiveFallback: false,
      direction: "vertical"
   });

   //add man
   $(".add-man").click(function() {
      var man = $(this).data("man");
      $("."+man+"").addClass( "team-active" );
   });

   $(".wrapper-team p").click(function() {
      $(this).toggleClass( "team-active" );
   });

   // form calc
   $(".form").change(function(){
      var counTree = $('.tree-count').val()*10;
      var diameter = +$( ".diameter-size" ).val();
      var checkbox = $( '.form input:checked' ).length;
      checkbox *= 2;
      var count = counTree + diameter + checkbox;

      $(".form-size-i").html(count+" РУБЛЕЙ");

      console.log(checkbox);
   });

});