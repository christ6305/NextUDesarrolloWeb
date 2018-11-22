var $j = jQuery.noConflict();

document.observe("dom:loaded", function(){
  var i = new Selector('input');
  var valorNombre = $F(i.findElements()[0]);
  var valorEmail = $F(i.findElements()[1]);
  var valorMasculino = $F(i.findElements()[2]);
  var valorFemenino = $F(i.findElements()[3]);
  var submitInput = i.match($$('form')[0].select('div:last')[0].childElements());

  console.log("Valor nombre: "+valorNombre);
  console.log("Valor email: "+valorEmail);
  console.log("Valor masculino: "+valorMasculino);
  console.log("Valor femenino: "+valorFemenino);
  console.log("Valor submit: "+submitInput);
})
