<?php

  class Auto
  {
    protected $cilindraje;
    private $modelo;
    public static $peso;
    const RUEDAS=4;

    function __construct($cilindraje,$modelo,$peso){
      $this->$cilindraje=$cilindraje;
      $this->$modelo=$modelo;
      $this->$peso=$peso;
    }

    public function arrancar($velocidad){
      echo '<p>el auto ha arrancado a una velocidad de: '.$velocidad.'</p>';
    }
  }

  $a=new Auto(1600,2001,500);
  echo $a->arrancar(20);
  echo AUTO::RUEDAS  //PARA PROPIEDADES Y METODOS ESTATICOS



 ?>
