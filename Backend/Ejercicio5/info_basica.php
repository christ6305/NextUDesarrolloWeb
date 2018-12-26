<?php
  require('c_Usuario.php');

  $user = new Usuario($_POST['nombre'], $_POST['apellido'], $_POST['tipo_id'], $_POST['identificacion'], $_POST['fecha_nacimiento'], $_POST['genero'], $_POST['estado_civil'], $_POST['tipo_telefono'], $_POST['telefono'], $_POST['pais'], $_POST['ciudad'], null );

  echo "Los datos del usuario ".$user->nombre." ".$user->apellido." han sido almacenados exitosamente";


 ?>
