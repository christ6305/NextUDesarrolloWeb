
$(function(){
    $("#nombre").focus(function(){
        $(".escondido").css("display", "block");
        $("#mensaje").text("En este campo debes escribir tu nombre completo");
    });

  $("#nombre").blur(function(){
      $(".escondido").css("display", "none");
  });

  $("#elementoSelector").change(function(){
      $(".escondido").css("display", "block").delay(1000).fadeOut("slow");
      $("#mensaje").text("Cambiaste la opcion del select");
  });

  $("#texto").select(function(){
    $(".escondido").css("display", "block").delay(1000).fadeOut("slow");
    $("#mensaje").text("Seleccionaste un texto!");
  });

  $("form").submit(function(){//solo para elemento formulario
    $(".escondido").css("display", "block").delay(1000).fadeOut("slow");
    $("#mensaje").text("Enviaste el formulario!");
    event.preventDefault();//PARA QUE NO SE ENVIE EL FORMULARIO SIN QUE SE REALIZA LA ACCION ESPECIFICADA
  });

});
