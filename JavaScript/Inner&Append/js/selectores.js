var resultados = document.getElementsByClassName('btn_red');

for(i=0;i<resultados.length;i++){
  resultados[0].innerHTML=texto="Nuevo texto";
}


document.getElementsByTagName('h5')[2].innerHTML="selecciona tu animal favorito y tus postres preferidos"

document.getElementById('lista_animales').className='input-field col s4'
document.getElementById('lista_postres').className='input-field col s4'

var cont_lista_nueva=document.createElement('div')
cont_lista_nueva.id='lista_musica'
cont_lista_nueva.className='input-field col s4'

document.getElementById('contenedor_listas').appendChild(cont_lista_nueva)

var lista_musica=document.createElement('select')
lista_musica.id='sel_musica'
lista_musica.className='icons'

var dis_opt=document.createElement('option')
dis_opt.value=''
dis_opt.disabled=true
dis_opt.selected=true
dis_opt.innerHTML='selecciona tu instrumento favorito'

var opt_trompeta=document.createElement('option')
opt_trompeta.value=''
opt_trompeta.dataset.icon='img/trompeta.png'
opt_trompeta.className='left circle'
opt_trompeta.innerHTML='trompeta'

lista_musica.appendChild(dis_opt)
lista_musica.appendChild(opt_trompeta)

cont_lista_nueva.appendChild(lista_musica)

var musicaLabel=document.createElement('label')
musicaLabel.innerHTML='instrumentos musicales'

cont_lista_nueva.appendChild(musicaLabel)


$(document).ready(function(){
  $('select').material_select()
})
