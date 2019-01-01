<?php

  require('./conector.php');

  $con = new ConectorBD('localhost','christian','12345');

  $response['conexion'] = $con->initConexion('transporte_db');

  if ($response['conexion']=='OK') {
    $resultado_consulta = $con->consultar(['usuarios'],
    ['email', 'psw'], 'WHERE email="'.$_POST['username'].'" AND psw="'.$_POST['passw'].'"');

    if ($resultado_consulta->num_rows != 0) {
      $response['acceso'] = 'concedido';
    }else $response['acceso'] = 'rechazado';
  }

  echo json_encode($response);

  $con->cerrarConexion();






 ?>
