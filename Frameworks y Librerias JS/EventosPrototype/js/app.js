
document.observe("dom:loaded", function(){

  Event.observe('boton-cancelar', 'click', function(){
    alert('Estas seguro?');
  })

  $('titulo').observe('mouseover', function(){
    this.addClassName('activo');
  })
  $('titulo').observe('mouseleave', function(){
    this.removeClassName('activo');
  })




})
