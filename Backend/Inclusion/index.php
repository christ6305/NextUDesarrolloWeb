<?php
  include 'operaciones.php';
  include 'vista/tablero.php';
  //require 'archivo.php';  

  $a=4;
  $b=5;

  $imp=new Visualizador('la suma de '.$a.' mas '.$b.' es '.sumar($a,$b));
  $imp->mostrarTitulo();

 ?>
