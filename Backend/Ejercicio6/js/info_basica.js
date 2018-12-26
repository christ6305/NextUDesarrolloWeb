$(function(){
  userLogged();
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
    dataType: 'json',
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    type: 'post',
    success: function(data){
      if (data.mensaje != "") {
        alert(data.mensaje+". "+data.final);
      }else {
        window.location.href = 'index.html';
      }
    },
    error: function (xhr, ajaxOptions, thrownError) {
        alert(xhr.status);
        alert(thrownError);
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
  form_data.append('profile_img', $("[name='profile-img']").prop('files')[0]);
  return form_data;
}

function userLogged(){
  $.ajax({
    url: "./checkSession.php",
    dataType: "json",
    cache: false,
    contentType: false,
    processData: false,
    type: 'post',
    success: function(response){
      if (response.msj == "true") {
        setTitles(response.nombre, response.img);
      }else {
        window.location.href = 'login.html';
      }
    },
    error: function(){
      window.location.href = 'login.html';
    }
  })
}

function setTitles(nombre, img){
  var icon = $('.dropdown-button i');
  $('.dropdown-button').text(nombre).append(icon);
  if (img == null || img == "") {
    $('.card-image img').attr('src', 'img/default.png');
  }else {
    $('.card-image img').attr('src', img);
  }
}
