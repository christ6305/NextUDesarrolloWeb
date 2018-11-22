$(function(){

  $("body").dblclick(function(){
    $(".oculto").fadeIn(4000,function(){alert("Animación terminada")});
  })

  //Codigo para la captura
  // $(document).keypress(function(event){
  //   if (event.which == 113) {
  //     $(".oculto").fadeOut('slow','linear');
  //   }
  // })

  //Codigo para la captura
  // $(document).keypress(function(event){
  //   if (event.which == 113) {
  //     $(".oculto").fadeToggle('slow','linear');
  //   }
  //   if (event.which == 112) {
  //     $(".panel-estadisticas").slideDown(500);
  //   }
  // })

  $(document).keypress(function(event){
    if (event.which == 111) {
      $(".oculto").fadeToggle('slow','linear');
    }
    if (event.which == 112) {
      $(".panel-estadisticas").slideToggle('fast');
    }
  })

})
