<?php

  class Usuario
  {
    public $nombre;
    public $apellido;
    public $tipo_id;
    public $id;
    public $fecha_nacimiento;
    public $genero;
    public $estado_civil;
    public $tipo_telefono;
    public $telefono;
    public $ciudad;
    public $pais;
    public $profile_img;
    public $hoja_vida;


    function __construct($nombre, $apellido, $tipo_id, $id, $fecha_nacimiento, $genero, $estado_civil, $tipo_telefono, $telefono, $ciudad, $pais, $profile_img){
      $this->nombre = $nombre;
      $this->apellido = $apellido;
      $this->tipo_id = $tipo_id;
      $this->id = $id;
      $this->fecha_nacimiento = $fecha_nacimiento;
      $this->genero = $genero;
      $this->estado_civil = $estado_civil;
      $this->tipo_telefono = $tipo_telefono;
      $this->telefono = $telefono;
      $this->ciudad = $ciudad;
      $this->pais = $pais;
      $this->profile_img = $profile_img;
    }

  }


 ?>
