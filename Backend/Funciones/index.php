<?php
  function saludar(){
    echo '<p> hola esto es un saludo</p>';
  }
  saludar();

  function sumar($numero1,$numero2){
    $suma=$numero1+$numero2;
    return $suma;
  };

  $resultadoSuma=sumar(10,10);

  echo $resultadoSuma;

 ?>
