var lista_nombres=["christian","andres","gaibor","erazo","marilyn","thalia","andrade","oviedo"];

var resultado="Las personas aceptadas a la conferencia son:\n";

for(var i=0;i<=7;i++){
  if(i==6){
    break;
  }
  resultado=resultado+lista_nombres[i]+"\n";
}

alert(resultado);
