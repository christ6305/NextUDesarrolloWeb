<?php
  require('library.php');

  $username = $_POST['username'];
  $password = $_POST['password'];
  $data = getData();

  if ($username=="") {
    echo "No se envió un nombre de usuario válido";
  }else {
    if (checkLogin($username, $password, $data)) {
      session_start();
      $_SESSION['username']=$username;
      echo "true";
    }else {
      echo "Hay un error con tu usuario o contraseña";
    }
  }



 ?>
