
var numeroClicks = 0;
function inicioJuego(){
  hideAll();
  bloqueHandler();
  ordenarBloques();
  numeroClicks=0;


}

function primerClick(){
  if(numeroClicks==1){
    return true;
  }else return false;
}
function ultimoClick(){
  if($$('.cuadro').length==2){
    var numMostrados=0;
    $$('.cuadro .contenido').each(function(item){
      if (item.visible()) {
        numMostrados++;
      }
    })
    if (numMostrados==2) {
      return true;
    }else return false;


  }else return false;
}

function bloqueHandler(){
  if ($('activarJuego').getValue()=='on') {

      $('tablero').observe('click', mostrarImg)

  }else{
    $('tablero').stopObserving('click');
    parar();
    reinicio();
    resetCuadros();
  }
}


function hideAll(){
  $$('.contenido').each(function(item){
    item.hide();
    bloqueHandler()
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

function mostrarImg(event){
  var bloqueClickeado = event.findElement();
  numeroClicks++;
  bloqueClickeado.down().show();
  decisionBloques();
  if (primerClick()) {
    inicio();
  }else if (ultimoClick()) {
    parar();

  }
}

function decisionBloques(){
  if (check2Clicks()) {
    $('tablero').stopObserving('click');
    if (matchSeleccionados()) {
      exitoMatch.delay(1);
    }else {
      hideAll.delay(1);
    }
  }
}

function matchSeleccionados(){
  var seleccionados = getMostrados();
  if (seleccionados[0].readAttribute('src')==seleccionados[1].readAttribute('src')) {
    return true;
  }else return false;
}

function exitoMatch(){
  var seleccionados = getMostrados();
  seleccionados.each(function(item){
    item.hide();
    item.up().removeClassName('cuadro');
    item.up().addClassName('cuadroExito');
  })
  bloqueHandler()
}

function resetCuadros(){
  $$('.contenido').each(function(item){
    item.up().addClassName('cuadro');
    item.up().removeClassName('cuadroExito');

  })
}

function ordenarBloques(){
  $$('.cuadro').each(function(item){
    item.setStyle({order: makeUniqueRandom()})
  })
}
var uniqueRandoms = [];
var numRandoms = 20;
function makeUniqueRandom() {
    // refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];

    // now remove that value from the array
    uniqueRandoms.splice(index, 1);

    return val;

}




document.observe("dom:loaded", function(){
  inicioJuego();
  $('activarJuego').observe('change', inicioJuego);




})
