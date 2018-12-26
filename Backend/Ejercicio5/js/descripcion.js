$(document).ready(function() {
    $('select').material_select();

    $('.preloader-wrapper').hide()
    $( document ).ajaxStart(function() {
      $( ".preloader-wrapper" ).show();
    });
    $( document ).ajaxStop(function() {
      $( ".preloader-wrapper" ).hide();
    });

    $('.desc-form').submit(descripSubmit);
});


function descripSubmit(event){
  event.preventDefault();
  var categoria =  $('#categoria').val();
  var descripcion = $('#descripcion').val();
  form_data = new FormData();
  form_data.append('categoria', categoria);
  form_data.append('descripcion', descripcion);
  $.ajax({
    url: './descripcion.php',
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
