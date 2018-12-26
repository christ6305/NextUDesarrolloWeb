$(function(){
  $('select').material_select();
  $('.datepicker').pickadate({
  selectMonths: true,
  selectYears: 200,
  months_full: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ],
  months_short: [ 'En', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
  weekdays_full: [ 'Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado' ],
  weekdays_short: [ 'Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab' ],
});
  $('.preloader-wrapper').hide()
  $( document ).ajaxStart(function() {
    $( ".preloader-wrapper" ).show();
  });
  $( document ).ajaxStop(function() {
    $( ".preloader-wrapper" ).hide();
  });

  $('.desc-form').submit(submitInfo);
})



function submitInfo(event){
  event.preventDefault();
  var form_data = getInfoForm();
  $.ajax({
    url: './info_basica.php',
    dataType: 'text',
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    type: 'post',
    success: function(data){
      alert(data);
      window.location.href = 'index.html';
    },
    error: function(){
      alert("error al enviar el formulario");
    }
  })
}


function getInfoForm(){
  var form_data = new FormData();
  form_data.append('nombre', $("[name='nombre']").val());
  form_data.append('apellido', $("[name='apellido']").val());
  form_data.append('tipo_id', $("[name='tipo_id']").val());
  form_data.append('identificacion', $("[name='identificacion']").val());
  form_data.append('fecha_nacimiento', $("[name='fecha_nacimiento']").val());
  form_data.append('genero', $("[name='genero']").val());
  form_data.append('estado_civil', $("[name='estado_civil']").val());
  form_data.append('tipo_telefono', $("[name='tipo_telefono']").val());
  form_data.append('telefono', $("[name='telefono']").val());
  form_data.append('pais', $("[name='pais']").val());
  form_data.append('ciudad', $("[name='ciudad']").val());
  return form_data;
}
