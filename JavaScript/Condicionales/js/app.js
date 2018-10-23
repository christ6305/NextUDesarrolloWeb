var a=0,b=0,r=0;
a=prompt("Ingrese el valor de a");
b=prompt("Ingrese el valor de b");

if(a>b){
  r=a*b;
}else{
  r=a/b;
}

alert("El resultado es: "+r);


var a=0,b=0,r=0,opcion=0;
a=prompt("Ingrese el valor de a");
b=prompt("Ingrese el valor de b");

opcion=prompt("Ingrese el numero correspondiente a la operacion que desea: \n 1. r=a+b \n 2. r=a-b \n 3. r=a*b \n (*) Si ingresa un valor diferente a estos numeros se ejecutara la opcion r=a/b")

a=Number(a);
b=Number(b);

switch(opcion){
  case 1:
    r=a+b;
    break;
  case 2:
    r=a-b
    break;
  case 3:
    r=a*b;
    break;
  default:
    r=a/b;
}

alert("El valor de r es: "+r)
