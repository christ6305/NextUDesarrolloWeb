<?php
  //Este archivo debe ser creado desde cero en la captura
  require('lib.php');

  $nombreTabla = 'usuarios';
  $props['id']= 'INT';
  $props['nombre']= 'VARCHAR(45)';
  $props['email']= 'VARCHAR(20)';
  $props['telefono']= 'VARCHAR(10)';


  $conector = new ConectorBD();

  if ($conector->initConexion('inventario_db')=='OK') {
    $query = $conector->getNewTableQuery($nombreTabla, $props);
    if ($conector->ejecutarQuery($query)) {
      echo "La tabla se creó exitosamente";
    }else {
      echo "Se produjo un error al crear la tabla";
    }
    $conector->cerrarConexion();
  }else {
    echo $conector->initConexion();
  }


 ?>
