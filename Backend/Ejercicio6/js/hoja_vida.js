$(function(){
  userLogged();

  $('.desc-form').submit(submitHV);
})


  function submitHV(event){
    event.preventDefault();
    form_data = new FormData();
    form_data.append('hoja_vida', $("input[type='file']").prop('files')[0]);
    $.ajax({
      url: "hoja_vida.php",
      dataType: "json",
      cache: false,
      data: form_data,
      contentType: false,
      processData: false,
      type: 'post',
      success: function(data){
        if (data.mensaje != "") {
          alert(data.mensaje+". "+data.final);
        }else {
          window.location.href = 'index.html';
        }
      },
      error: function(){
        alert('Error al enviar el formulario');
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
