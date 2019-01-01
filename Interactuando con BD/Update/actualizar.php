<?php

  require('lib.php');

  $con = new ConectorBD();

  if ($con->initConexion('inventario_db')=='OK') {

    $datos['nombre'] = "'Thalia Andrade'";
    $datos['telefono'] = "'0994542688'";

    if ($con->actualizarRegistro('usuarios', $datos, "id=2")) {
      echo "Se han actualizado los datos correctamente";
    }else echo "Se ha producido un error en la actualización";


    $con->cerrarConexion();

  }else {
    echo "Se presentó un error en la conexión";
  }




 ?>
