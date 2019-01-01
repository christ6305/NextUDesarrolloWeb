<?php

  require('lib.php');

  $con = new ConectorBD();

  if ($con->initConexion('inventario_db')=='OK') {

    if ($con->eliminarRegistro('usuarios', "telefono like '4%'")) {
      echo "Se han eliminado los datos correctamente";
    }else echo "Se ha producido un error en la eliminacion";


    $con->cerrarConexion();

  }else {
    echo "Se presentó un error en la conexión";
  }




 ?>
