
/*------------------- Ejercicio Lección 2 ----------------------------------------*/

function cambiarColorBotonesAccion(elemento){
  elemento.style.background = "#4d62d0";
  elemento.children[0].style.background = "inherit";
}

function retornarColorBotonesAccion(elemento){
  elemento.style.background = "#149c5f";
  elemento.children[0].style.background = "inherit";
}


function mostrarContenido(elemento){
  for (var i = 0; i < document.querySelectorAll("[class^='item-']").length; i++) {
    document.querySelectorAll("[class^='item-']")[i].style.width = "4%";
    document.querySelectorAll("[class^='item-']")[i].style.background = "#4d62d0";
  }
  for (var i = 0; i < document.querySelectorAll("[class^='item-'] *").length; i++) {
    document.querySelectorAll("[class^='item-'] *")[i].style.display = "none";
  }
  elemento.style.width = "96%";
  elemento.style.background = "#fff";
  for (var i = 0; i < elemento.children.length; i++) {
    elemento.children[i].style.display = "block";
  }
}

function reducirTamañoBotonAccion(elemento){
  elemento.style.width = "18%";
}
function aumentarTamañoBotonAccion(elemento){
  elemento.style.width = "20%";
}
function reducirTamañoLetra(){
  document.querySelectorAll("[class^='item-'] h1")[0].style.fontSize = "small";
  document.querySelectorAll("[class^='item-'] h1")[1].style.fontSize = "small";
  document.querySelectorAll("[class^='item-'] h1")[2].style.fontSize = "small";
}
function aumentarTamañoLetra(){
  document.querySelectorAll("[class^='item-'] h1")[0].style.fontSize = "xx-large";
  document.querySelectorAll("[class^='item-'] h1")[1].style.fontSize = "xx-large";
  document.querySelectorAll("[class^='item-'] h1")[2].style.fontSize = "xx-large";
}

/*-------------------------------------------------------------------------------*/



/*------------------- Ejercicio Lección 3 ----------------------------------------*/
function activarVolumen(){
  document.getElementById('speaker-radio').checked = false;
  document.querySelector('.audio img').setAttribute("src", "img/speaker.png");
}

function desactivarVolumen(){
  document.getElementById('speaker-radio').checked = true;
  document.querySelector('.audio img').setAttribute("src", "img/mute.png");
}

function saludoInicial(){
  var nombreUsuario = document.getElementsByName('nombre')[0].value;
  var nuevoSaludo = document.createElement('H2');
  var contenidoSaludo = document.createTextNode("Bienvenido "+nombreUsuario);
  nuevoSaludo.appendChild(contenidoSaludo);
  document.getElementsByClassName('container-saludo')[0].appendChild(nuevoSaludo);
}

function addContenido(element){
  var nuevoTexto = document.createElement('P');
  var contenidoTexto = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
  nuevoTexto.appendChild(contenidoTexto);
  element.appendChild(nuevoTexto);
}

function modificarTitulo(element, texto){
  element.innerHTML=texto;
}
