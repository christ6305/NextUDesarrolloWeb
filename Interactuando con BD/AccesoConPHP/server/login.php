<?php
  require('./conector.php');

  $con = new ConectorBD();
  $response['conexion']=$con->initConexion('transporte_db');
  echo json_encode($response);
  $con->cerrarConexion();

 ?>
