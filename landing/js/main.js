$(function(){
  //Toggle nav for mobile
  $('.fa-bars').click(function() {
    $('.nav-toggle').toggleClass("visible-sm visible-xs");
  });

  //smooth scrolling
  function smoothScroll(element) {
    var id  = $(element).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
    return false;
  }

  $(".nav").on("click","a", function (event) {
    smoothScroll(this);
  });

  $(".to-top").on("click","a", function (event) {
    $('body,html').animate({scrollTop: 0}, 1000);
    return false;
  });

  //Sticky Header
  $(window).scroll(function() {
    if($(this).scrollTop() > 70) {
      $('.slider').css('padding-top', '73px');
      $('#header').addClass('stycky');
    }else {
      $('.slider').css('padding-top', '0px');
      $('header').removeClass('stycky');
    }
  });

  //Slider
  var slidesCount = $(".slide").length;
  var indexSlide = $(".slide").index($(".active-slide"));

  function next() {
    var active = $(".active-slide");
    active.removeClass("active-slide");
    indexSlide ++;

    if(slidesCount > indexSlide) {
      $(".slide").eq(indexSlide).addClass("active-slide");
    }else {
      $(".slide").eq(0).addClass("active-slide");
      indexSlide = 0;
    }
  }

  function prev() {
    var active = $(".active-slide");
    active.removeClass("active-slide");
    indexSlide --;

    if(indexSlide < 0) {
      $(".slide").eq(slidesCount-1).addClass("active-slide");
      indexSlide = slidesCount-1;
    }else {
      $(".slide").eq(indexSlide).addClass("active-slide");
    }
  }

  $(".next").click(function() {
    next();
  });

  $(".prev").click(function() {
    prev();
  });
});