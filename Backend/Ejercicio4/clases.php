<?php

  class Asignatura
  {
    private $nombre;
    private $nota1;
    private $nota2;
    private $nota3;

    public function __construct($nombre, $nota1, $nota2, $nota3)
    {
      $this->nombre = $nombre;
      $this->nota1 = $nota1;
      $this->nota2 = $nota2;
      $this->nota3 = $nota3;
    }
    public function getNombre(){
      return $this->nombre;
    }
    public function getNota1(){
      return $this->nota1;
    }
    public function getNota2(){
      return $this->nota2;
    }
    public function getNota3(){
      return $this->nota3;
    }
    public function setNombre($nombre){
      $this->nombre = $nombre;
    }
    public function setNota1($newNota){
      $this->nota1 = $newNota;
    }
    public function setNota2($newNota){
      $this->nota2 = $newNota;
    }
    public function setNota3($newNota){
      $this->nota3 = $newNota;
    }
    public function calcularPromedio(){
      return ($this->nota1 + $this->nota2 + $this->nota3)/3;
    }

  }

  class Estudiante
  {
    private $nombre;
    private $asignaturas = array();
    private $curso;

    function __construct($nombre, $curso)
    {
      $this->nombre = $nombre;
      $this->curso = $curso;
    }
    public function getNombre(){
      return $this->nombre;
    }
    public function getCurso(){
      return $this->curso;
    }
    public function getAsignaturas(){
      return $this->asignaturas;
    }
    public function setNombre($nombre){
      $this->nombre = $nombre;
    }
    public function setCurso($curso){
      $this->curso = $curso;
    }
    public function addAsignatura(Asignatura $a){
      array_push($this->asignaturas, $a);
    }

  }

  class Profesor
  {
    private $nombre;
    private $estudiantes = array();

    function __construct($nombre)
    {
      $this->nombre = $nombre;
    }
    public function getNombre(){
      return $this->nombre;
    }
    public function getEstudiantes(){
      return $this->estudiantes;
    }
    public function setNombre($nombre){
      $this->nombre = $nombre;
    }
    public function addEstudiante(Estudiante $a){
      array_push($this->estudiantes, $a);
    }
  }

  class Padre
  {
    private $nombre;
    private $hijos = array();

    public function __construct($nombre){
      $this->nombre = $nombre;
    }
    public function getNombre(){
      return $this->nombre;
    }
    public function getHijos(){
      return $this->hijos;
    }
    public function setNombre($nombre){
      $this->nombre = $nombre;
    }
    public function addHijo(Estudiante $a){
      array_push($this->hijos, $a);
    }


  }





 ?>
