$(document).ready(function() {
  userLogged();
  $('select').material_select();

 });


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
        setTitles(response.nombre, response.descripcion, response.img, response.info_basica, response.hoja_vida);
      }else {
        window.location.href = 'login.html';
      }

    },
    error: function(){
      window.location.href = 'login.html';
    }
  })
}


function setTitles(nombre, descripcion, img, info_basica, hoja_vida){
  $('.nombre-user').text(nombre);
  var icon = $('.dropdown-button i');
  $('.dropdown-button').text(nombre).append(icon);
  if (descripcion == "") {
    var link = document.createElement('A');
    $(link).append('Descripción').addClass('link').attr('href', 'descripcion.html');
    $('.card-panel p').text(`Aún no has escrito tu perfil. Para hacerlo dirígete a la sección `).append(link);
    $('.states li:nth-child(1) i').text('clear').css('color', '#9e9e9e');
  }else {
    $('.card-panel p').text(descripcion);
    $('.states li:nth-child(1) i').text('done').css('color', '#2196f3');
  }
  if (img == null || img == "") {
    $('.card-image img').attr('src', 'img/default.png');
  }else {
    $('.card-image img').attr('src', img);
  }
  if (info_basica == "") {
    $('.states li:nth-child(2) i').text('clear').css('color', '#9e9e9e');
  }else{
    $('.states li:nth-child(2) i').text('done').css('color', '#2196f3');
  }
  if (hoja_vida == "") {
    $('.states li:nth-child(3) i').text('clear').css('color', '#9e9e9e');
  }else{
    $('.states li:nth-child(3) i').text('done').css('color', '#2196f3');
  }
}
