var suma=4+4;
var resta=10-5;
var multiplicacion=20/5;
var division=100/4;

console.log("SUMA: "+suma+" RESTA: "+resta+" MULTIPLICACION: "+multiplicacion+" DIVISION: "+division);


var modulo=9%3
console.log("MODULO: "+modulo);

var num=20;
var incremento=++num;
var decremento=--num;
var unario=-num;

console.log("NUMERO:"+num+" INCREMENTO: "+incremento+" DECREMENTO: "+decremento+" UNARIO: "+unario);

var x=true;
var not=!x;

console.log(not);

var x=true;
var y=false;

console.log(x && y);


function evaluarPares(num1,num2){
  if((num1%2)==0 && (num2%2)==0){
    alert("LOS DOS NUMEROS SON PARES");
  }else {
    alert("LOS DOS NUMEROS NO SON PARES");
  }
}

evaluarPares(2,3);


var x=true;
var y=false;

console.log(x || y);



function evaluarPares2(num1,num2){
  if((num1%2)==0 || (num2%2)==0){
    alert("ALGUNO DE LOS DOS NUMEROS ES PAR");
  }else {
    alert("ALGUNO DE LOS DOS NUMEROS NO ES PAR");
  }
}

evaluarPares2(2,3);
