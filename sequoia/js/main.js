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

   $(".to-sec-3").click(function() {
      $(".main").moveTo(3);
   });

   $(".to-sec-14").click(function() {
      $(".main").moveTo(14);
   });

   $(".to-sec-16").click(function() {
      $(".main").moveTo(16);
   });

   $(".to-sec-19").click(function() {
      $(".main").moveTo(19);
   });

   $(".f-to-top").click(function() {
      $(".main").moveTo(1);
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

   //services
   $(".services-price").click(function() {
      var perent = $(this).closest("section").find('.price').toggle("slow");
      console.log($(this).closest("section").find('.price'));

   });

   $(".sec-3 .services-tab").click(function() {
      var cl = $(this).data("cl");
      var secBg = $(this).data("image")
      $(".sec-3 .services-tab").removeClass('active-tab');
      $(this).addClass('active-tab');
      $(".sec-3 .services-txt").removeClass('services-a-txt');
      $(".sec-3 ."+cl+"").addClass( "services-a-txt" );
      $(".sec-3").css({"background": secBg, "background-size": "cover"});
   });

   $(".sec-4 .services-tab").click(function() {
      var cl = $(this).data("cl");
      var secBg = $(this).data("image")
      $(".sec-4 .services-tab").removeClass('active-tab');
      $(this).addClass('active-tab');
      $(".sec-4 .services-txt").removeClass('services-a-txt');
      $(".sec-4 ."+cl+"").addClass( "services-a-txt" );
      $(".sec-4").css({"background": secBg, "background-size": "cover"});
   });

   $(".sec-5 .services-tab").click(function() {
      var cl = $(this).data("cl");
      var secBg = $(this).data("image")
      $(".sec-5 .services-tab").removeClass('active-tab');
      $(this).addClass('active-tab');
      $(".sec-5 .services-txt").removeClass('services-a-txt');
      $(".sec-5 ."+cl+"").addClass( "services-a-txt" );
      $(".sec-5").css({"background": secBg, "background-size": "cover"});
   });

   $(".sec-6 .services-tab").click(function() {
      var cl = $(this).data("cl");
      var secBg = $(this).data("image")
      $(".sec-6 .services-tab").removeClass('active-tab');
      $(this).addClass('active-tab');
      $(".sec-6 .services-txt").removeClass('services-a-txt');
      $(".sec-6 ."+cl+"").addClass( "services-a-txt" );
      $(".sec-6").css({"background": secBg, "background-size": "cover"});
   });

   $(".sec-7 .services-tab").click(function() {
      var cl = $(this).data("cl");
      var secBg = $(this).data("image")
      $(".sec-7 .services-tab").removeClass('active-tab');
      $(this).addClass('active-tab');
      $(".sec-7 .services-txt").removeClass('services-a-txt');
      $(".sec-7 ."+cl+"").addClass( "services-a-txt" );
      $(".sec-7").css({"background": secBg, "background-size": "cover"});
   });

   $(".sec-8 .services-tab").click(function() {
      var cl = $(this).data("cl");
      var secBg = $(this).data("image")
      $(".sec-8 .services-tab").removeClass('active-tab');
      $(this).addClass('active-tab');
      $(".sec-8 .services-txt").removeClass('services-a-txt');
      $(".sec-8 ."+cl+"").addClass( "services-a-txt" );
      $(".sec-8").css({"background": secBg, "background-size": "cover"});
   });

   $(".sec-9 .services-tab").click(function() {
      var cl = $(this).data("cl");
      var secBg = $(this).data("image")
      $(".sec-9 .services-tab").removeClass('active-tab');
      $(this).addClass('active-tab');
      $(".sec-9 .services-txt").removeClass('services-a-txt');
      $(".sec-9 ."+cl+"").addClass( "services-a-txt" );
      $(".sec-9").css({"background": secBg, "background-size": "cover"});
   });

   //popap
   $(".open-popap").click(function() {
      $(".show-form").show('slow');
   });

   $(".form").click(function() {
      event.stopPropagation();
   });

   $(".clouse-popup").click(function() {
      $(".popup").hide('slow');
   });

   $(".end-succses").click(function() {
      $(".succsec-popap").hide('slow');
   });


   //slider

   $(".slider li").on("click", function(){
      var widthLi = $(".slider li").outerWidth(true);
      var item = $(this),
      pos = "-"+(item.index() * widthLi)+"px";

      item.addClass("active");
      item.siblings().removeClass("active");

      $(".slider ul").css("left", pos);
   });

   $(".slider .next").on("click", function(){
      var item = $(".slider .active .slider-active-img");

      if(item.next().is(".sl-img")){
         item.removeClass("slider-active-img");
         item.next().addClass("slider-active-img");
      }
      console.log(item.next());
   });

   $(".slider .prev").on("click", function(){
      var item = $(".slider .active .slider-active-img");

      if(item.prev().is(".sl-img")){
         item.removeClass("slider-active-img");
         item.prev().addClass("slider-active-img");
      }
   });

   $('.carousel').carousel();

});