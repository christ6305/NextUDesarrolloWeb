<?php
  session_start();
  require('c_Usuario.php');
  require('library.php');

  $respuestas = uploadFile('profile_img', 'uploadedImgs');
  if(isset($respuestas["newSource"])){
    $newImg = $respuestas["newSource"];
  }else {
    $newImg = null;
  }

  $user = new Usuario($_POST['nombre'], $_POST['apellido'], $_POST['tipo_id'], $_POST['identificacion'], $_POST['fecha_nacimiento'], $_POST['genero'], $_POST['estado_civil'], $_POST['tipo_telefono'], $_POST['telefono'], $_POST['pais'], $_POST['ciudad'], $newImg );

  updateData($_SESSION['username'], 'nombre', $user->nombre);
  updateData($_SESSION['username'], 'apellido', $user->apellido);
  updateData($_SESSION['username'], 'tipo_id', $user->tipo_id);
  updateData($_SESSION['username'], 'id', $user->id);
  updateData($_SESSION['username'], 'fecha_nacimiento', $user->fecha_nacimiento);
  updateData($_SESSION['username'], 'genero', $user->genero);
  updateData($_SESSION['username'], 'estado_civil', $user->estado_civil);
  updateData($_SESSION['username'], 'tipo_telefono', $user->tipo_telefono);
  updateData($_SESSION['username'], 'telefono', $user->telefono);
  updateData($_SESSION['username'], 'ciudad', $user->ciudad);
  updateData($_SESSION['username'], 'pais', $user->pais);
  updateData($_SESSION['username'], 'profile_img', $user->profile_img);

  echo json_encode($respuestas);
 ?>
