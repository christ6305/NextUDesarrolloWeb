//Función definida, que retorna el estilo del cursor a su aspecto normal y esconde el mensaje.
function cursorNormal(){
  $("body").removeClass("cursorCorte");
  $("body").removeClass("cursorConstruir");
  $("#mensaje").hide("fast");
}



$(function(){
  //Acción del botón de la vaca, para mostrar y ocultar la imágne de la vaca
  $("#btn-vaca").on("click", function(){
    cursorNormal();
    $("#vaca").toggle(2000, function(){
      $("#mensaje").show();
      $("#mensaje").text("La vaca hace Muuuu");
    });
  });
  //Acción del botón del cerdo, para mostrar y ocultar la imágne del cerdo
  $("#btn-cerdo").on("click", function(){
    cursorNormal();
    $("#cerdo").toggle(2000, function(){
      $("#mensaje").show();
      $("#mensaje").text("El cerdo hace Oink");
    });
  });
  //Acción del botón de la gallina, para mostrar y ocultar la imágne de la gallina
  $("#btn-gallina").on("click", function(){
    cursorNormal();
    $("#gallina").toggle(2000, function(){
      $("#mensaje").show();
      $("#mensaje").text("La gallina hace cloac");
    });
  });
  //Acción del botón de la oveja, para mostrar y ocultar la imágne de la oveja
  $("#btn-oveja").on("click", function(){
    cursorNormal();
    $("#oveja").toggle(2000, function(){
      $("#mensaje").show();
      $("#mensaje").text("La oveja hace Beeee");
    });
  });


  //Acción al presionar el botón de corte, que cambia el estilo del cursor a las tijeras
  $("#bCorte").on("click", function(){
    $(".animal, #mensaje").hide("fast","linear");
    $("body").removeClass("cursorConstruir");
    $("body").addClass("cursorCorte");
    $(".animal, #mensaje").hide("fast","linear");
  });

  //Acción al presionar el botón de construcción, que muestra las piezas del corral y cambia el estilo del cursor
  $("#bConstruir").on("click", function(){
    $(".animal, #mensaje").hide("fast","linear");
    $("body").removeClass("cursorCorte");
    $("body").addClass("cursorConstruir");
    $(".cerca").show(5000, function(){
      $("h1").text("Construye una cerca");
    });
    $(".animalP").show(5000);
  });



  //Función que esconde los arbustos al posar el mouse encima si se tiene la herramienta de las tijeras
  $(".arbusto").hover(function(){
    if ($("body").hasClass("cursorCorte")) {
        $(this).hide(250);
    }
  });

  //Función que activa el movimiento de los objetos del corral al hacer click en ellos
  $(".cerca, .animalP").mousedown(function(){
    var self = $(this);
    $(this).on('dragstart', function(event) {
      event.preventDefault();
    });
    //Función anidada que cambia la posición del elemento si se presiona el click y se mueve
    $("body").mousemove(function(event){
      self.css("left", function(){
        var newLeft = event.pageX;
        return newLeft+"px";
      });
      self.css("top", function(){
        var newLeft = event.pageY;
        return newLeft+"px";
      });
    });
  });

  //Función que posiciona el elemento en la ubicación en que el mouse se levanta
  $("body").mouseup(function(event){
    $(this).off("mousemove");
    var x = $(event.target).css("left");
    var y = $(event.target).css("top");
    $(event.target).css("left",x);
    $(event.target).css("top",y);
  });


  //Acción que termina el juego con el mensaje Muy Bien
  $("#bCursor").on("click", function(){
    cursorNormal();
    $(".cerca, .animalP, .animal, #mensaje").hide(1000, function(){
      $("h1").text("Muy Bien!");
    })
  });

});
