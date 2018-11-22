var $j = jQuery.noConflict();

document.observe("dom:loaded", function(){
  var titulo = $('tituloInicio');
  var botonesLaterales = $$('.botonRedondo');
  var primeraFilaIconos = $$('footer div div div')[2].childElements()[0].next();
  var padresEnlaceContacto = $$("a[href='contacto.html']")[0].ancestors();
  var previoTexto = $('textoQueEs').previous();

  console.log("titulo: "+titulo.inspect());
  console.log("botonesLaterales: "+botonesLaterales.inspect());
  console.log("primeraFilaIconos: "+primeraFilaIconos.inspect());
  console.log("padresEnlaceContacto: "+padresEnlaceContacto.inspect());
  console.log("previoTexto: "+previoTexto.inspect());
})
