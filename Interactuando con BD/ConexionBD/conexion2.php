<?php
  $conexion=new mysqli('localhost','christian','12345','prueba');
  if($conexion->connect_error){
    echo 'error'.$mysqli->connect_error;
  }else{
    echo 'conexion exitosa';
  }

  $conexion->close();






 ?>
