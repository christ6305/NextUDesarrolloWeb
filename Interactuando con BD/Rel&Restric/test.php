<?php
  require('lib.php');

  $conector = new ConectorBD();

  if ($conector->initConexion('inventario_db')=='OK') {
    
    if($conector->nuevaRelacion('usuarios','ciudades','ciudad','id')){
      echo 'se añadio una relacion exitosamente';
    }else{
      echo 'se presento errores';
    }

    $conector->cerrarConexion();
  }else {
    echo $conector->initConexion();
  }


 ?>
