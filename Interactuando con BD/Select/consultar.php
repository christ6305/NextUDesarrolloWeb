<?php

  require('lib.php');

  $con = new ConectorBD();

  if ($con->initConexion('inventario_db')=='OK') {

    if ($resultado=$con->consultar(['usuarios'], ['*'])) {

      while($fila=$resultado->fetch_assoc()){
          echo $fila['id'].' '.$fila['nombre']." ".$fila['email']." ".$fila['telefono']." ".$fila['ciudad']."</br>";
      }
      echo "Se consultaron los registros exitosamente";
    }else echo "Hubo un problema y los registros no fueron consultados";



  }else {
    echo "Se presentó un error en la conexión";
  }




 ?>
