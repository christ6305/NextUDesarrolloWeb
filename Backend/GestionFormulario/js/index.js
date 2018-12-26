$(function(){

  $('select').material_select();
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 50
  });
  $('form').submit(function(){
    $('select').material_select('destroy');
    $('.datepicker').pickadate('destroy');
  });
})
