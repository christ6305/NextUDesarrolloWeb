<?php
  try {
    $conexion=new PDO('mysql:host=localhost;dbname=prueba','christian','12345');
    echo 'conexion exitosa';

  } catch (PDOException $ex) {
    print 'error: '.$ex->getMessage().'</br>';
    die();
  }

  $conexion=null;

 ?>
