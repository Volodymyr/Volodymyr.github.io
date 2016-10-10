$(function() {
  $('#number').click(function() {
    $('.toggle-number').toggleClass('inline-block');
  });

  //scroll
  $("#nav").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1000);
  });

  //popap
  $('.reception').click(function() {
    $('.popap-reception').fadeIn(300);
  });

  $('.cross').click(function() {
    $('.popap-reception').fadeOut(300);
  });

  $('.question').click(function() {
    $('.popap-question').fadeIn(300);
  });

  $('.cross').click(function() {
    $('.popap-question').fadeOut(300);
  });

  //slider popap
  $('.spec').click(function(event) {
    var description = $(this).find('.description');
    if(description.is(":hidden")) {
      description.css("display" , "block");
    } else {
      description.css("display" , "none");
    }
  });

  //nav-button
  $('.nav-button').click(function() {
    $('.nav ul').toggle('slow');
  });

  //input
  $(window).resize(function(){
    chengText();
  });


  function chengText() {
    if($(this).width() <= 768) {
        $('.consultation-form-button').val('Заказать консультацию');
      } else {
        $('.consultation-form-button').val('Заказать бесплатную консультацию');
      }
  }
  chengText();
});

(function( $ ) {
    $(document).ready(function(){
        $(window).scroll(function(){
          if ($(window).scrollTop() >= $('#consultation').offset().top) {
            $('#nav').addClass("nav-fixed");
          } else {
            $('#nav').removeClass("nav-fixed");
          }
        });
    });
} )( jQuery );

//slider
$(function(){
  $('.specialists-slider').slick({
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
});