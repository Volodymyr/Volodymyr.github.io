$(document).ready(function () {

  function toogleMenu() {
    var $trigger = $('.trigger-nav'),
        $menu = $('.horizontal-nav');

      $trigger.click(function() {
        $(this).next($menu).slideToggle();
      });
      
      $(window).resize(function() {
        if ( $(window).width() > 710 ) {
          $menu.removeAttr('style');
        }
      });
    }
    toogleMenu();
});