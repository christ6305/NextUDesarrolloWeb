var resultados = document.getElementsByClassName('btn_red');

for(i=0;i<resultados.length;i++){
  resultados[0].innerHTML=texto="Nuevo texto";
}

document.getElementById('sel_animales').disabled='true'

$(document).ready(function(){
  $('select').material_select()
})
