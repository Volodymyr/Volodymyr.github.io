$(function() {

  var t = $('#footer-range');

  rangeGradient(t);

  $('#footer-range').on('input', function () {
    $('#length-apron').val(this.value + "м");
    $('#price-from').html(this.value*1500);
    $('#price-to').html(this.value*2500);
    var percent = Math.ceil(((this.value - this.min) / (this.max - this.min)) * 100);
    $(this).css({'background': '-moz-linear-gradient(left, #c90000, #c90000 ' + percent + '%, #cccccc ' + percent + '%)',
    'background': '-webkit-linear-gradient(left, #c90000, #c90000 ' + percent + '%, #cccccc ' + percent + '%)'});
  });

  function rangeGradient(t) {
    var percent = Math.ceil(((t.val() - t.prop('min')) / (t.prop('max') - t.prop('min'))) * 100);
    $(t).css({'background': '-moz-linear-gradient(left, #c90000, #c90000  ' + percent + '%, #cccccc ' + percent + '%)',
    'background': '-webkit-linear-gradient(left, #c90000, #c90000  ' + percent + '%, #cccccc ' + percent + '%)'
   });
  }
});
