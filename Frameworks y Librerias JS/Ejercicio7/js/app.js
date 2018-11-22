// Variable que determina la dificultad del juego, entre menor sea mas dificil es.
var Dificultad = 500;

//----------------------ANIMACIÓN FLECHAS----------------------//

//Animación que mueve un elemento hacia la derecha
function derecha(elemento, desplazamiento, velocidad){
  $(elemento).animate(
    {
      left: "+="+desplazamiento
    }, velocidad, function(){
      izquierda(elemento, desplazamiento, velocidad)
    }
  )
}

//Animación que mueve un elemento hacia la izquierda
function izquierda(elemento, desplazamiento, velocidad){
  $(elemento).animate(
    {
      left: "-="+desplazamiento
    }, velocidad, function(){
      derecha(elemento, desplazamiento, velocidad)
    }
  )
}

//Animación que mueve un elemento hacia arriba
function arriba(elemento){
  $(elemento).animate(
    {
      top: "-=400"
    }, Dificultad, function(){
      abajo(elemento)
    }
  )
}

//Animación que mueve un elemento hacia abajo
function abajo(elemento){
  $(elemento).animate(
    {
      top: "+=400"
    }, Dificultad, function(){
      arriba(elemento)
    }
  )
}

//-----------------------------------------------------------------//


//Animación que mueve el balón de futbol
function shoot(elemento, posV, posH){
  $(elemento)
  .animate(
    {
      top: posV,
      left: posH
    },{
      queue: false
    },800)
  .animate(
    {
      width: "-=70"
    },
    {
      step: function(now, fx){
        $(elemento).css("transform","rotate("+now*10+"deg)");
      },
      queue: false,
      duration: 800,
      complete: function(){

        var x= parseFloat(posH);
        var y= parseFloat(posV);
        var centro = parseFloat($("#arquero").css("left"))+235;
        //Validaciones si pega en los palos
          if ((x>=979&&x<=1009)&&(y>=88)) {
            rebote(elemento,"derecha");
          }else if ((y<=88&&y>=50)&&(x>=450)) {
            rebote(elemento, "arriba");
          }else if ((x>=454&&x<=486)&&(y>=88)) {
            rebote(elemento, "izquierda");
          }else if ((x<454||x>1009)||(y<55||y>409)) { //Validación si va por fuera
            rebote(elemento, "lejos");
          }else if(((x>(centro-55))&&(x<(centro+23)))&&(y>154&&y<236)){ //Validaciones si pega en el arquero
            rebote(elemento, "arriba");
          }else if(((x>(centro-128))&&(x<(centro+95)))&&(y>280&&y<362)){
            rebote(elemento, "arriba");
          }else if(((x>(centro-185))&&(x<(centro+143)))&&(y>226&&y<280)){
            rebote(elemento, "arriba");
          }else if(((x>(centro-122))&&(x<(centro-88)))&&(y>362&&y<432)){
            rebote(elemento, "izquierda");
          }else if (((x>(centro+63))&&(x<(centro+97)))&&(y>362&&y<432)) {
            rebote(elemento, "derecha");
          }else{
            $(elemento).css("zIndex","3"); //Si no sucede nada de lo anterior se indica que se marco el Gol
            $("#arquero").css("zIndex","4");
            golScored(elemento);
          }

      }
    }
  )

}

//Animacion para cuando se marca un gol
function golScored(elemento){
  $(elemento)
    .animate(
      {
        top: "400px",
      },{
        step: function(now, fx){
          $(this).css("transform","rotate("+now*2+"deg)")
        },
        duration: 1000,
        complete: function() {
          $("h1").fadeIn(1000, function(){
            $(this)
              .css("color","green")
          })
        }
      }
    )

}

//Animación para cuando se falla el cobro
function rebote(elemento, direccion){
  if (direccion=="izquierda") {
    $(elemento)
      .css("zIndex","4")
      .animate(
        {
          top: "380px",
          left: "-50px"
        },{
          step: function(now, fx){
            $(elemento).css("transform","rotate("+now*2+"deg)");
          },
          duration: 500
        }
      )
  }else if (direccion=="arriba") {
    $(elemento)
      .css("zIndex","4")
      .animate(
        {
          top: "-50px"
        },{
          step: function(now, fx){
            $(elemento).css("transform","rotate("+now*2+"deg)");
          },
          duration: 500
        }
      )
  }else if (direccion=="derecha") {
    $(elemento)
      .css("zIndex","4")
      .animate(
        {
          top: "380px",
          left: "1600px"
        },{
          step: function(now, fx){
            $(elemento).css("transform","rotate("+now*2+"deg)");
          },
          duration: 500
        }
      )
  }else if (direccion=="lejos"){
    $(elemento)
      .css("zIndex","1")
      .animate(
        {
          top: "380px",
          width: "-=50"
        },{
          step: function(now, fx){
            $(elemento).css("transform","rotate("+now*2+"deg)");
          },
          duration: 1000
        }
      )
  }


}


var vecesPresionada;
//Función que reinicia el juego
function reiniciar(){
  if (vecesPresionada!=0) {
    vecesPresionada=0;
    $("#balon").css({
      left: "700px",
      top: "600px",
      width: "100px",
      transform: "rotate(0deg)",
      zIndex: "4"
    });
    $("#arco").css("zIndex","2");
    $("#fHorizontal")
      .css({
        left: "350px",
        top: "10px"
      })
      .stop()
    $("#fVertical")
      .css({
        left: "305px",
        top: "400px"
      })
      .stop()
    $("#arquero").stop();
    $("#arquero").css({
      left: "400px",
      zIndex: "3"
    });
    $("h1").hide();
  }


}



//Document.Ready
$(function(){
  vecesPresionada=0;
  var posHorizontal;
  var posVertical;


//Evento al presionar tecla
  $(document).on("keypress",function(e){

//Validación tecla barra espaciadora
    if (e.which==32) {
      e.preventDefault();
      vecesPresionada++;
      if (vecesPresionada==1) {
        derecha($("#fHorizontal"),750,Dificultad);
        derecha($("#arquero"),230,1500);
      }else if (vecesPresionada==2) {
        $("#fHorizontal").stop();
        arriba($("#fVertical"));
      }else if (vecesPresionada==3) {
        $("#fVertical").stop();
        posHorizontal = $("#fHorizontal").css("left");
        posVertical = $("#fVertical").css("top");
        shoot($("#balon"), posVertical, posHorizontal);
      }
    }
  });

//Evento reiniciar el juego al presionar el botón
  $(".iniciar").on("click", function(){
    reiniciar();
  })











});
