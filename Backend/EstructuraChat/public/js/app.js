//-----FUNCIONES DEL DISEÑO ADAPTATIVO------//
function isMobile(){
  var screenSize = screen.width;
  if(screenSize<992){
    return true
  }else return false;
}

function inicioOrganizacion(){
  if (isMobile()==true) {
    $('#btnMessage').attr('class', 'btn-floating hide-on-large-only')
    organizarMensaje();
  }
}

function organizarMensaje(){
  $(".numHora").unwrap();
  var horas = $(".numHora");
  for (var i = 0; i < horas.length; i++) {
    $(horas[i]).prependTo($(horas[i]).prev());
  }
  var horasRecibido=$(".recibidos .numHora");
  for (var i = 0; i < horasRecibido.length; i++) {
    $(horasRecibido[i]).next().after(horasRecibido[i]);
  }

}

function slideContactos(direction){
  if (desplegado==false) {
    if (direction=="left") {
      $(".right-side")
      .css({
        position: "absolute",
        zIndex: "3",
        right: "0px",
        display: "none"
      })
      .removeClass("hide-on-small-only")
      .show("slide", { direction: "right" },300)
      desplegado=true;
    }

  }else{
    if (direction=="right") {
      $(".right-side").hide("slide", { direction: "right" }, 300)

      desplegado=false;
    }


  }
}

var desplegado = false;
$(function(){
  //----VARIABLES Y FUNCIONES DEL DISEÑO ADAPTATIVO -----//
  $(".container").css("height",$(window).height());
  inicioOrganizacion();
  if (isMobile()) {
    $(".input-contenedor button").html("<i class='material-icons right'>send</i>")
    $("body").swipe({
      swipe:function(event, direction, distance, duration, fingerCount){
        slideContactos(direction);
      },
      allowPageScroll:"vertical"
    })
    $(".titulo-chat button").on("click", function(){
      slideContactos("left");
    })
  }
})
