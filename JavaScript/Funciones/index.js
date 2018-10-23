//
// // Funciones
//
// function nombreFuncion() {
// // Bloque de código
// }
//
// // Llamado a la funcion :
//
// nombreFuncion()  // Recordar los parentesis para ejecutarla ;
//
// // Parametros
//
// function nombreFuncion(nombre, apellido, edad, peso, .... paramN) {
// // Bloque de código
// }
//
// // Llamado al a funcion con parametros
//
// nombreFuncion('Edward', 'Monsalve', '24', '80', ...)
//

// function alertarMensaje(nombre, edad, estatura) {
//   alert('Mi nombre es : '+ nombre +' , tengo ' +edad+ ' años y mi estatura es: ' + estatura + ' CM')
// }
//
// alertarMensaje('Edward', 24, '1.88')
//
// function alertarMensaje2(nombre, edad, estatura){
//   var mensaje='Mi nombre es : '+ nombre +' , tengo ' +edad+ ' años y mi estatura es: ' + estatura + ' CM';
//   return mensaje;
// }
//
// console.log(alertarMensaje2('Edward', 24, '1.88'));

// function Sumar(){
//   if(arguments.length>0){
//     alert(arguments[0]+arguments[1]);
//   }else{
//     alert("NO SE ENVIARON PARAMETROS EN LA FUNCION");
//   }
// }
//
//   Sumar(8,4);

//funciones anonimas
// setInterval(function(){console.log('Mensaje repetitivo');},2000);
// setTimeout(function(){console.log('Mensaje luego de una espera');},2000);
//
// //callback: funcion que se envia como parametro a otra funcion con el proposito de tener bajo control el tiempo de ejecucion del codigo
// function Personalizada(num1, num2, funcion2){
//     var resultado=num1+num2;
//     funcion2(resultado);
// }
//
// Personalizada(4,8,function(resultado){alert(resultado);});

//funciones autoejecutables
// (function(){
//     console.log(this);
// });
//
// (function(nombre,apellido){
//     console.log(nombre+' '+apellido);
// })('THALIA','ANDRADE');

//contextos
// var myObject={
//   property:'hola christian',
//   func:function(){
//     return this.property;
//   }
// }
//
// console.log(myObject.func());
//
// var myObject2={
//   property:'hola christian'
// };
//
// function retornarPropiedad(){
//   alert(this.property);
// };
//
// myObject2.f=retornarPropiedad;
// myObject2.f();

// (function (nombre, apellido, nota1, nota2, nota3){
//   var nombreCompleto = nombre + ' ' + apellido
//   alert('se está procesando la calificación para: ' + nombreCompleto)
//   setTimeout(function(){
//   	var sumaNotas = nota1 + nota2 + nota3;
//   	var calificacionTotal = sumaNotas / 3;
//   })
//   alert(nombreCompleto + " obtuvo en programación " + calificacionTotal);
// }, 1000);
//   alert(nombreCompleto + " obtuvo en programación " + calificacionTotal);
// }, 1000);

//CLOSURES
// function inicializa(){
//   var prop=42
//   function mostrarProp(){
//     alert(prop);
//   }
//   mostrarProp();
// };
//
// inicializa();

// var calculadora=(function(num1,num2){
//   var resultado=0
//
//   function actualizarResultado(nuevoResultado){
//     resultado=nuevoResultado
//   }
//
//   return {
//     sumar:function(){
//       var resultado:num1+num2
//       actualizarResultado(resultado)
//     },
//     restar:function(){
//       var resultado:num1-num2
//       actualizarResultado(resultado)
//     },
//     multiplicar:function(){
//       var resultado:num1*num2
//       actualizarResultado(resultado)
//     },
//     dividir:function(){
//       var resultado:num1/num2
//       actualizarResultado(resultado)
//     },
//     resultado:function(){
//       return resultado;
//     }
//   }
// });

//CALLBACKS
// function aviso(mensaje){
//   alert(mensaje);
// }
//
// function OperacionLarga(param1,param2,aviso){
//   aviso('termino de realizar la operacion')
// }

// function ejecutarProceso(miCallback){
//   miCallback('devolviendo un valor')
// }
//
// ejecutarProceso(function(valorDevuelto){
//   console.log('termino de hacer algo y responde '+valorDevuelto);
// })

// function funcionCompleja(callback1, callback2, callback3){
//   callback1('termino el proceso 1')
//   callback2('termino el proceso 2')
//   callback3('termino toda la funcion')
// }
//
// funcionCompleja(
//   function(mensaje){
//     alert(mensaje)
//   },
//   function(mensaje){
//     alert(mensaje)
//   },
//   function(mensaje){
//     alert(mensaje)
//   }
// )


//mas ejemplos
//CALLBACKS
function calificado (mensaje) {
 alert(mensaje);
};
(function (nombre, apellido, nota1, nota2, nota3, calificado) {
 var nombreCompleto = nombre + " " + apellido;
 var sumaNotas = nota1 + nota2 + nota3;
 var calificacionTotal = sumaNotas / 3;
 var resultado = nombreCompleto + " obtuvo " + calificacionTotal;
 calificado(resultado);
})("Jason", "Roberts", 5.0, 4.2, 3.5)

//funcion autoejecutable
(function (nombre, apellido, nota1, nota2, nota3, calificado) {
 var nombreCompleto = nombre + " " + apellido;
 var sumaNotas = nota1 + nota2 + nota3;
 var calificacionTotal = sumaNotas / 3;
 var resultado = nombreCompleto + " obtuvo " + calificacionTotal;
 alert(resultado);
})("Jason", "Roberts", 5.0, 4.2, 3.5)

//funcion anonima
setTimeout (function () {
 var nombreCompleto = 'Jason Roberts';
 var sumaNotas = 5.0 + 4.2 + 3.5;
 var calificacionTotal = sumaNotas / 3;
 alerta(nombreCompleto + ' obtuvo ' + calificacionTotal);
}, 1000)

//CLOSURES
function operaciones () {
 var multiplicacion = 3569 * 5640;
 var suma = 3569 + 5644;
 function resultados() {
   alert ("la suma " + suma + " multiplicación " + multiplicacion);
 }
 resultados();
}
operaciones();
