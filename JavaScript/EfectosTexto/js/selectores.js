var resultados = document.getElementsByClassName('btn_red');

for(i=0;i<resultados.length;i++){
  resultados[0].innerHTML=texto="Nuevo texto";
}

var titulos=document.getElementsByClassName('card-title')
titulos[0].style.textTransform='uppercase'
titulos[1].style.textTransform='lowercase'
titulos[2].style.textTransform='capitalize'


var parrafos=document.getElementsByTagName('p')
parrafos[0].style.fontFamily='cursive'
parrafos[0].style.fontFamily='fantasy'
parrafos[0].style.fontFamily='monoscape'
