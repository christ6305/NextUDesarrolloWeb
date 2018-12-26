<?php
  $titulo=$_POST['titulo'];
  $file=fopen('.../uploaded_files/'.$titulo,'r');
  $response['contenido']=fread($file,filesize('.../uploaded_files/'.$titulo));
  $response['titulo']=$titulo;

  echo json_encode($response);
  fclose ($file);

 ?>
