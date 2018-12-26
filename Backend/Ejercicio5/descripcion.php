<?php
  $categoria = $_POST['categoria'];
  $descripcion = $_POST['descripcion'];

  if ($descripcion=="") {
    echo "No se recibió una descripción";
  }else{
    echo "Se recibieron los datos exitosamente";
  }

 ?>
