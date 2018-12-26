<?php
  $directorio='uploads/';
  $nombreImagen=$_FILES['file']['name'];
  $archivo_a_subir=$directorio.basename($nombreImagen);
  $tipoArchivo=pathinfo($archivo_a_subir,PATHINFO_EXTENSION);
  $tamanio_archivo=$_FILES['file']['size'];
  $exito=true;
  $respuestas;

  if(file_exists($archivo_a_subir)){
    $respuestas['mensaje']='el archivo ya existe';
    $exito=false;
  }

  if($tamanio_archivo>20000){
    $respuestas['mensaje']='el archivo es demasiado extenso';
    $exito=false;
  }

  if($tipoArchivo!='jpg' && $tipoArchivo!='jpeg' && $tipoArchivo!='png' && $tipoArchivo!='gif'){
    $respuestas['mensaje']='solo se permiten archivos jpg, jpeg, png y gif';
    $exito=false;
  }

  if($exito==false){
    $respuestas['mensaje']='lo sentimos, tu archivo no fue añadido';
  }else{
    if(move_uploaded_file($_FILES['file']['tmp_name'],$archivo_a_subir)){
      $respuestas['final']='el archivo '.basename[$nombreImagen].' ha sido añadido';
      $respuestas['mensaje']='';
      $respuestas['newSource']=$archivo_a_subir;
    }else{
      $respuestas['final']='lo sentimos tu archivo no fue añadido';
    }
  }

 ?>
