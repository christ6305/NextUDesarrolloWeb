<?php
  $titulo=$_POST['titulo'];
  $texto=$_POST['texto'];
  $newFile=fopen('.../uploaded_files/'.$titulo,'w') or die('error en la creacion del archivo');
  fwrite($newFile,$texto);
  fclose($newFile);
  $response['mensaje']='tu archivo se creo exitosamente';
  $response['titulo']=$titulo;
  echo json_encode($response);
 ?>
