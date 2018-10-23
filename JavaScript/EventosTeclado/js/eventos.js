
function mostrar_tecla(event){
  var tecla=event.which || event.keyCode;
  document.querySelector("#tarjeta_muestra_tecla #texto_tarjeta").innerHTML='PRESIONASTE LA TECLA: '+String.fromCharCode(tecla);
}

function cambiarTituloVerde(){
  document.querySelector("#tarjeta_cambia_color .card-image span").className="card-title green";
}

function cambiarTituloNegro(){
  document.querySelector("#tarjeta_cambia_color .card-image span").className="card-title black";
}

function teclaTextBox(event){
  var tecla=event.which || event.keyCode;
  document.querySelector("#tarjeta_presiona_input_text .card-action a").innerHTML='PRESIONASTE LA TECLA: '+String.fromCharCode(tecla);
}
