$(document).ready(function() {
    userLogged();
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
      if (data=="true") {
        window.location.href = 'index.html';
      }else {
        alert(data);
      }
    },
    error: function(){
      alert("error al enviar el formulario");
    }
  })
}

function userLogged(){
  $.ajax({
    url: "checkSession.php",
    dataType: "json",
    cache: false,
    contentType: false,
    processData: false,
    type: 'post',
    success: function(response){
      if (response.msj == "true") {
        setTitles(response.nombre);
      }else {
        window.location.href = 'login.html';
      }
    },
    error: function(){
      window.location.href = 'login.html';
    }
  })
}

function setTitles(nombre){
  var icon = $('.dropdown-button i');
  $('.dropdown-button').text(nombre).append(icon);
}
