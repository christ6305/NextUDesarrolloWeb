
function bloqueHandler(){
  if ($('activarJuego').getValue()=='on') {

      $('tablero').observe('click', function(event){
        var bloqueClickeado = event.findElement();
        bloqueClickeado.down().setStyle({display: 'block'});
        if (check2Clicks()) {
          hideAll.delay(1.5);
        }
      })


  }else{
    $('tablero').stopObserving('click');
  }
}






document.observe("dom:loaded", function(){

  bloqueHandler();
  $('activarJuego').observe('change', bloqueHandler);


})





//Estas funciones no hay que codificarlas durante la captura, ya deben estar creadas antes de capturar

function hideAll(){
  $$('.contenido').each(function(item){
    item.hide();
  })
}

function check2Clicks(){
  if (getMostrados().length==2) {
    return true;
  }else return false;
}

function getMostrados(){
  var imgMostradas = new Array()
  var i = 0;
  $$('.contenido').each(function(item, index){
    if(item.visible()){
      imgMostradas[i]=item;
      i++;
    }
  });
  return imgMostradas;
}
