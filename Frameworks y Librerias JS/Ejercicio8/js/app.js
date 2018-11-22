//Función que permite mostrar sólo las imágenes correspondientes a determinada categoría
function filtrar(categoria){
  $(".imgBox").hide()
  if (categoria=="todos") {
    $(".imgBox").show("fade",800)
  }else if (categoria=="flores") {
    $(".imgBox img[src^='image/f']").parent().show("fade",800)
  }else if (categoria=="deportes") {
    $(".imgBox img[src^='image/d']").parent().show("fade",800)
  }else if (categoria=="autos") {
    $(".imgBox img[src^='image/c']").parent().show("fade",800)
  }else if (categoria=="aviones") {
    $(".imgBox img[src^='image/a']").parent().show("fade",800)
  }else if (categoria=="paisajes") {
    $(".imgBox img[src^='image/l']").parent().show("fade",800)
  }
}

$(function(){

  //Inicializador del menu
  $("#menu").menu()

  //Asignación de los eventos para clasificar las fotos por categorías en el menu
  $("#todos").on("click", function(){
    filtrar("todos")
  })
  $("#flores").on("click", function(){
    filtrar("flores")
  })
  $("#deportes").on("click", function(){
    filtrar("deportes")
  })
  $("#autos").on("click", function(){
    filtrar("autos")
  })
  $("#paisajes").on("click", function(){
    filtrar("paisajes")
  })
  $("#aviones").on("click", function(){
    filtrar("aviones")
  })
  // -------------------------------------------------------------------

  //Inicializador del acordeón
  $("#descripciones").accordion()

  //Evento click y drag sobre las imágenes
  $(".imgBox")
    .on("click", function(){
      var ruta = $(this).find("img").attr("src");
      $("#verImagen img").attr("src",ruta);
      $("#verImagen").dialog("open");
    })
    .draggable({
      start: function(){
        $(this)
          .off("click")
          .css("z-index","2")
      }
    })
  //------------------------------------------------------

  //Inicializador de la ventana emergente para ver la foto
  $("#verImagen").dialog({
    autoOpen: false,
    modal: true,
    width: 800,
    show: {
      effect: "blind",
      duration: 1000
    },
    hide: {
      effect: "blind",
      duration: 100
    }
  })
  //------------------------------------------------------

  //Definición de la interacción droppable sobre el contenedor de eliminar
  $(".trash").droppable({
    accept: ".imgBox",
    classes: {
      "ui-droppable-hover": "ContenedorDrop"
    },
    drop: function(event, ui){
      $(ui.draggable)
        .hide("clip", 1000)
        .removeClass("imgBox")
    }
  })
  //------------------------------------------------------


  //Definición de la interacción droppable sobre el contenedor de favoritos
  $(".favoritos").droppable({
    accept: ".imgBox",
    classes: {
      "ui-droppable-hover": "ContenedorDrop"
    },
    drop: function(event, ui){
      $(ui.draggable)
        .css({
          width: "100%",
          position: "relative",
          left: "auto",
          top: "auto"
        })
        .draggable("destroy")
        .addClass("imgBoxFav")
        .removeClass("imgBox")
        .appendTo($(this))
    }
  })
  //------------------------------------------------------


})
