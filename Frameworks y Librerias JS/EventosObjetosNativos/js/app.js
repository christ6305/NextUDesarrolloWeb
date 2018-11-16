$( document ).ready(function() {//una vez se carga la totalidad de la pagina

  alert("La página se ha cargado");

  $( window ).resize(function() {//se dispara cada vez que se modifica el tamaño de la ventana del navegador que se muestra la pagina
    $( "h4" ).html( "El ancho de la página es: " + $( window ).width() );
  });

  $( window ).scroll(function(){//se dispara cada vez que se realiza un desplazamiento abajo o arriba
    $( "h4" ).html("La posición vertical es: "+ $(window).scrollTop());
  });



});
