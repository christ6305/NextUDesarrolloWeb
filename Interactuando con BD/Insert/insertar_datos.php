<?php

  require('lib.php');

  $con = new ConectorBD();

  if ($con->initConexion('inventario_db')=='OK') {

    $datos['nombre'] = "New York";

    if ($con->insertData('ciudades', $datos)) {
      echo "Se insertaron los datos correctamente";
    }else echo "Se ha producido un error en la inserción";

    $con->cerrarConexion();

  }else {
    echo "Se presentó un error en la conexión";
  }




 ?>
