//Verificar si hay dos checkboxes seleccionados
function check2seleccionados(){
  var contador=0;
  var items = $(".elemento-selec .collection-item input");
  for (var i = 0; i < items.length; i++) {
    if (items[i].checked == true) {
      contador++;
    }
  }
  if (contador>2) {
    return false;
  }else return true;
}

//Quitar la selección de un checkbox al superar el número de selecciones permitidas
function resetCheck(itemSelected){
  var contador=0;
  var i=0;
  var flag = 0;
  var items = $(".elemento-selec .collection-item input");

  for (var i = 0; i < items.length; i++) {

    if ((items[i].checked == true)&&(items[i]!=itemSelected) ) {
      items[i].checked = false;
      break;
    }
  }
}

//Retorna todos los id de los checkboxes seleccionados
function getCheckedItems(){
  var items = $(".elemento-selec .collection-item input");
  var seleccion = Array(2);
  var index = 0;
  for (var i = 0; i < items.length; i++) {
    if (items[i].checked == true) {
      seleccion[index]=$(items[i]).attr("id");
      index++;
    }
  }
  return seleccion;
}

//Relaciona los ids de checkboxes seleccionados con los items de la lista izquierda
function matchCheckedItems(){
  var itemsId = getCheckedItems();
  var elementosSelec = Array(2);
  var elementosTotales = $(".elemento-tabla .collection-item");
  for (var i = 0; i < itemsId.length; i++) {
    for (var j = 0; j < elementosTotales.length; j++) {
      if (itemsId[i].slice(0,-5) == $(elementosTotales[j]).attr("id")) {
        elementosSelec[i] = elementosTotales[j];
      }
    }
  }
  return elementosSelec;
}

//Relaciona los ids de checkboxes seleccionados con los items de la lista de checkboxes
function matchCheckboxes(){
  var itemsId = getCheckedItems();
  var checkboxesSelec = Array(2);
  var checkTotales = $(".elemento-selec .collection-item input");
  for (var i = 0; i < itemsId.length; i++) {
    for (var j = 0; j < checkTotales.length; j++) {
      if (itemsId[i] == $(checkTotales[j]).attr("id")) {
        checkboxesSelec[i] = $(checkTotales[j]).parent();
      }
    }
  }
  return checkboxesSelec;
}

//Auxiliar para usar el método sort() con números
function sortNumber(a,b) {
  return a - b;
}

//Obtener los valores de los items a partir de la categoría del filtro para ordenarlos
function getStringArray(tipo){
  var stringElementos;
  if (tipo=='nombre') {
    var getNombres = $(".elemento-tabla .collection-item .title");
    stringElementos = $(".elemento-tabla .collection-item .title");
    for (var i = 0; i < getNombres.length; i++) {
      stringElementos[i]=$(getNombres[i]).text();
    }
  }
  if (tipo=='precio') {
    var getPrice = $(".elemento-tabla .collection-item p b").text();
    stringElementos = getPrice.split("Precio: $");
    stringElementos.shift();
    for (var i = 0; i < stringElementos.length; i++) {
      stringElementos[i] = parseFloat(stringElementos[i]);
    }

  }
  if (tipo=='marca') {
    var getMarca = $(".elemento-tabla .collection-item p span").text();
    stringElementos = getMarca.split("Marca ");
    stringElementos.shift();
  }
  return stringElementos;
}

//Compara un arreglo ordenado de strings o números y los relaciona con los items en las listas, organizandolos para que queden en orden
function organizarItemsOrdenados(arrayElementos){
  var itemsOriginales = $(".elemento-tabla .collection-item");
  var checkOriginales = $(".elemento-selec .collection-item");
  for (var i = 0; i < arrayElementos.length; i++) {
    for (var j = 0; j < itemsOriginales.length; j++) {
      if (typeof arrayElementos[i] == "number") {
        var precioOriginal = $(itemsOriginales[j]).find("b").text().split("$");
        if (parseFloat(precioOriginal[1])==arrayElementos[i]) {
          if (i==0) {
            $(".elemento-tabla .collection-item").last().before(itemsOriginales[j]);
            $(".elemento-selec .collection-item").last().before(checkOriginales[j]);
          }else{
            $(".elemento-tabla .collection-item").last().after(itemsOriginales[j]);
            $(".elemento-selec .collection-item").last().after(checkOriginales[j]);
          }
        }
      }else {
        if ($(itemsOriginales[j]).text().search(arrayElementos[i])!=-1) {
          if (i==0) {
            $(".elemento-tabla .collection-item").last().before(itemsOriginales[j]);
            $(".elemento-selec .collection-item").last().before(checkOriginales[j]);
          }else{
            $(".elemento-tabla .collection-item").last().after(itemsOriginales[j]);
            $(".elemento-selec .collection-item").last().after(checkOriginales[j]);
          }
        }
      }


    }
  }
}

//Document.Ready
$(function(){

  //Inicializador del elemento select de materialize css
  $('select').material_select();

  //Evento para cambiar de color al item seleccionado
  $(".elemento-tabla .collection-item").on("click",function(){
    $(".collection-item").removeClass("selected-item");
    $(this).toggleClass("selected-item");
    var checkAsociadoId= $(this).attr("id")+"Check";
    $("#"+checkAsociadoId).parent().toggleClass("selected-item");
  });

  //Variables para el manejo de eliminar y deshacer
  var itemEliminado;
  var itemEliminadoCh;
  var nextItem;
  var nextItemCh;
  var prevItem;
  var prevItemCh;

  //Evento que permite eliminar el item seleccionado
  $("#borrar").on("click",function(){
    if ($(".collection-item").hasClass("selected-item")) {
      nextItem = $(".elemento-tabla .selected-item + .collection-item");
      nextItemCh = $(".selected-item + .collection-item .check").parent();
      if (nextItem.length == 0) {
        prevItem = $(".elemento-tabla .selected-item").prev();
        prevItemCh = $(".selected-item .check").parent().prev();
      }
      itemEliminado = $(".elemento-tabla .selected-item").detach();
      itemEliminadoCh = $(".selected-item .check").parent().detach();
    }
  });

  //Evento que permite deshacer la eliminación de un elemento
  $("#deshacer").on("click",function(){
    if (itemEliminado) {
      if (nextItem) {
        $(nextItem).before($(itemEliminado));
        $(nextItemCh).before($(itemEliminadoCh));
      }
      if (prevItem) {
        $(prevItem).after($(itemEliminado));
        $(prevItemCh).after($(itemEliminadoCh));
        prevItem = null;
        prevItemCh = null;
      }

    }
  })

  //Evento que verifica al seleccionar un checkbox que no se seleccionen más de 2 checkboxes
  $(".check").on("change", function(){
    if (check2seleccionados()==false) {
      resetCheck(this);
    }
  });

  //Evento que permite reemplazar dos items de la lista seleccionados con su respectivo checkbox
  $("#reemplazar").on("click", function(){
    var elemento1 = matchCheckedItems()[0];
    var elemento2 = matchCheckedItems()[1];
    var check1 = matchCheckboxes()[0];
    var check2 = matchCheckboxes()[1];
    var prevCheck = $(check2).prev();
    var tmpCheck = check1;
    var previo = $(elemento2).prev();
    var tmp = elemento1;


    if ($(previo).attr("id")==$(elemento1).attr("id")) {
      previo = elemento2;
      prevCheck = check2;
    }


    $(elemento1).replaceWith(elemento2);
    $(previo).after(tmp);
    $(check1).replaceWith(check2);
    $(prevCheck).after(tmpCheck);

    elemento1, elemento2, previo, tmp= null;


  });

  //Evento al seleccionar un filtro para ordenar la lista según el criterio especificado
  $("#filtro").on("change", function(){
    var categoria = $(this).val();
    var elementosOrdenar = getStringArray(categoria);
    if (categoria=="precio") {
      elementosOrdenar.sort(sortNumber);
    }else {
      elementosOrdenar.sort();
    }

    organizarItemsOrdenados(elementosOrdenar);

  });

})
