<?php
  session_start();
  require('library.php');

  if (isset($_SESSION['username'])) {
    $response['nombre'] = getInfo($_SESSION['username'], 'nombre');
    $response['descripcion'] = getInfo($_SESSION['username'], 'descripcion');
    $response['info_basica'] = getInfo($_SESSION['username'], 'id');
    $response['hoja_vida'] = getInfo($_SESSION['username'], 'hoja_vida');
    $response['img'] = getInfo($_SESSION['username'], 'profile_img');
    $response['msj'] = "true";
  }else {
    $response['msj'] = "false";
  }

  echo json_encode($response);



 ?>
