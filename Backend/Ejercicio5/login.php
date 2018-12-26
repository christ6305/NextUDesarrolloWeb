<?php
  $username = $_POST['username'];
  $password = $_POST['password'];

  if ($username=="") {
    echo "No se envió un nombre de usuario válido";
  }else {
    echo "se recibieron los datos adecuadamente. El usuario ingresado fue ".$username;
  }



 ?>
