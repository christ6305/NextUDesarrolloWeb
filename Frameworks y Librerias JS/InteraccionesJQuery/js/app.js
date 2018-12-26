$(function(){

  $(".caja").draggable()

  $(".contenedor")
    .droppable({
      accept: ".der",
      drop: function(event, ui){
        $(this).addClass("ui-state-highlight")
        alert("Correcto!")
      }
    })
    .resizable({
      animate: true
    })

  $(".lista").sortable({
    placeholder: "nuevo"
  })

})
