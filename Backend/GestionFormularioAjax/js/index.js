$(function(){

  // $('select').material_select();
  // $('.datepicker').pickadate({
  //   selectMonths: true,
  //   selectYears: 50
  // });

  $('#formulario').submit(function(event){
    var nombre=$('form').find('input[name="nombre_usuario"]').val();
    event.preventDefault();
    $.ajax({
      url:'.../recepcion_formulario.php',
      type:'POST',
      data: {nombre:nombre}

    }).done(function(data){
      alert(data) // que se hace con la respuesta del servidor
    })

    // $('select').material_select('destroy');
    // $('.datepicker').pickadate('destroy');
  });
})
