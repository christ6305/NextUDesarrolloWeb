$(function(){

  $('select').material_select();
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears: 50
  });


  $('#formulario').submit(function(event){
    var nombre = $('#formulario').find('input[name="nombre_usuario"]').val();
    event.preventDefault();
    $.ajax(
      {
        url: './recepcion_formulario.php',
        type: 'POST',
        data: {nombre: nombre}
      }
    ).done(function(data){
      alert(data);
    })
  });



})
