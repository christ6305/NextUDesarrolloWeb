<?php
  /**
   *
   */
  class DivisionEntreCero extends Exception
  {
    function mensajeError(){
      return 'no puedes hacer una division entre cero';
    }
  }
  /**
   *
   */
  class NumeroNegativo extends Exception
  {
    function mensajeError(){
      return 'no puedes usar numero negativos en esta division';
    }
  }



 ?>
