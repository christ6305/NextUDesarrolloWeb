<?php
  $persona1='pedro';
  $persona2='juan';
  $_persona3='carlos';

  function saludar(){
    global $persona1;
    echo "hola".$persona1;

  }
  //saludar();
  $a=true;
  $b=2;
  $c=2.76;
  $d='a';
  $e=[1,2,3];
  $f=new stdClass();
  $g=NULL;

  echo ' '.gettype($a);
  echo ' '.gettype($b);
  echo ' '.gettype($c);
  echo ' '.gettype($d);
  echo ' '.gettype($e);
  echo ' '.gettype($f);
  echo ' '.gettype($g);

  

 ?>
