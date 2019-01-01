<?php
  require('access.php');
  try {
    $conexion = new PDO('mysql:host='.$host.';', $user, $password);

    $sql = 'CREATE DATABASE inventario_db';
    $conexion->exec($sql);
    echo "La base de datos inventario_db fue creada exitosamente";

  } catch (PDOException $e) {
    print "Error: " . $e->getMessage() . "<br/>";
    die();
  }


  $conexion = null;
 ?>
