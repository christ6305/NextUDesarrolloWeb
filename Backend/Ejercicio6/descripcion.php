<?php
  session_start();
  require('library.php');
  $categoria = $_POST['categoria'];
  $descripcion = $_POST['descripcion'];

  if ($descripcion=="") {
    echo "No se recibió una descripción";
  }else{
    updateData($_SESSION['username'], 'categoria', $categoria);
    updateData($_SESSION['username'], 'descripcion', $descripcion);
    echo "true";
  }

 ?>
