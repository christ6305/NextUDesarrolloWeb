var $j = jQuery.noConflict();

document.observe("dom:loaded", function(){

  var tituloImagenSantaMarta = $$('.img-thumbnail')[5].next().select('h4')[0];
  var botonNavbar = $('logoImg').ancestors()[1].select('button')[0];
  var imgPasto = $$('p:last')[0].ancestors()[0].previous();
  var enlaceVideojuego = $$('footer')[0].childElements()[0].childElements()[1].select('.btn')[0];

  console.log("Titulo imagen Santa Marta: "+tituloImagenSantaMarta.inspect());
  console.log("Botón barra de navegación: "+botonNavbar.inspect());
  console.log("Imagen Pasto: "+imgPasto.inspect());
  console.log("Enlace Videojuego: "+enlaceVideojuego.inspect());

})
