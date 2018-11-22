
function derecha(elemento){
  $(elemento).animate(
    {
      left: "+=750"
    }, 500, function(){
      izquierda(elemento)
    }
  )
}

function izquierda(elemento){
  $(elemento).animate(
    {
      left: "-=750"
    }, 500, function(){
      derecha(elemento)
    }
  )
}

function arriba(elemento){
  $(elemento).animate(
    {
      top: "-=400"
    }, 500, function(){
      abajo(elemento)
    }
  )
}

function abajo(elemento){
  $(elemento).animate(
    {
      top: "+=400"
    }, 500, function(){
      arriba(elemento)
    }
  )
}


$(function(){
  var vecesPresionada=0;
  var posHorizontal;
  var posVertical;
  $(document).on("keypress",function(e){

    if (e.which==32) {
      e.preventDefault();
      vecesPresionada++;
      if (vecesPresionada==1) {
        derecha($("#fHorizontal"));
      }else if (vecesPresionada==2) {
        $("#fHorizontal").stop();
        arriba($("#fVertical"));
      }else if (vecesPresionada==3) {
        $("#fVertical").stop();
        posHorizontal = $("#fHorizontal").css("left");
        posVertical = $("#fVertical").css("top");
      }
    }
  })

  $("#balon").on("click", function(){
    $(this)
    .animate(
      {
        top: posVertical,
        left: posHorizontal
      },600)
      .animate(
          {
            width: "-=70"
          },
          {
            step: function(now){//PERMITE EJECTUAR ACCIONES MIENTRA SE REALIZA LA ANIMACION
              $(this).css("transform","rotate("+now*10+"deg)")
            },
            queue: false,//LA ANIMACION DEBE EJECTUARSE CON EL ELEMENTO
            duration: 1200
          }
        )
      .delay(1000)//ESPECIFIA UN TIEMPO DE ESPERA PARA QUE LA SIGUIENTE ANIMACION SE EJECUTE
      .animate(
        {
          top: "400px"
        }, 1000
      )

  });




});
