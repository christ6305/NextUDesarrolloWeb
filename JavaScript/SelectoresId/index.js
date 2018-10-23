//variables
var nombre;
var apellido;
var email;
var usuario;
var password;
var boton;

//asignacion
nombre= document.getElementById('nombre');
apellido= document.getElementById('apellido');
email= document.getElementById('email');
usuario= document.getElementById('usuario');
password= document.getElementById('password');
boton= document.getElementById('btn-guardar');

//mostrar objecto seleccionado
console.log(boton);

//funcion que se ejecuta en el evento
function mostrarAlerta(mensaje){
  alert('el usuario dio click sobre el boton de envio')
}

//asignacion del evento al boton
boton.addEventListener('click',mostrarAlerta);
