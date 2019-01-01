<?php


  class ConectorBD
  {
    private $host = 'localhost';
    private $user = 'christian';
    private $password = '12345';
    private $conexion;

    function initConexion($nombre_db){
      $this->conexion = new mysqli($this->host, $this->user, $this->password, $nombre_db);
      if ($this->conexion->connect_error) {
        return "Error:" . $this->conexion->connect_error;
      }else {
        return "OK";
      }
    }

    //Borrar esta función antes de hacer la captura.
    function getNewTableQuery($nombre_tbl, $campos){
      $sql = 'CREATE TABLE '.$nombre_tbl.' (';
      $length_array = count($campos);
      $i = 1;
      foreach ($campos as $key => $value) {
        $sql .= $key.' '.$value;
        if ($i!= $length_array) {
          $sql .= ', ';
        }else {
          $sql .= ');';
        }
        $i++;
      }
      return $sql;
    }

    //Borrar esta función antes de hacer la captura.
    function ejecutarQuery($query){
      return $this->conexion->query($query);
    }

    //Borrar esta función antes de hacer la captura.
    function cerrarConexion(){
      $this->conexion->close();
    }


  }





 ?>
