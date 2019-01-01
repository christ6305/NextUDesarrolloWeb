<?php

  require('lib.php');

  $con = new ConectorBD();

  if ($con->initConexion('inventario_db')=='OK') {
    $conexion = $con->getConexion();

    $insert = $conexion->prepare('INSERT INTO usuarios (id, nombre, email, telefono, ciudad) VALUES (?,?,?,?,?)');
    $insert->bind_param("isssi", $id, $nombre, $email, $telefono, $ciudad);

    $id = 1;
    $nombre = 'Pablo Gonzales';
    $email = 'pablo.g@mail.com';
    $telefono = '8876473';
    $ciudad = 1;
    $insert->execute();

    $id = 2;
    $nombre = 'Maria Rodriguez';
    $email = 'm_rodriguez@mail.com';
    $telefono = '8347210';
    $ciudad = 1;
    $insert->execute();

    echo "Se insertaron los registros exitosamente";

    $con->cerrarConexion();

  }else {
    echo "Se presentó un error en la conexión";
  }




 ?>
