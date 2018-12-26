<?php
  session_start();
  require('library.php');

  $respuestas = uploadFile('hoja_vida', 'uploadedDocs');

  if(isset($respuestas["newSource"])){
    $newDoc = $respuestas["newSource"];
  }else {
    $newDoc = null;
  }
  updateData($_SESSION['username'], 'hoja_vida', $newDoc);

  echo json_encode($respuestas);

 ?>
