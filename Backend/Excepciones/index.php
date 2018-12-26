<?php
  include 'excepciones.php';

  function dividir($numero1,$numero2){
    if($numero2==0){
      throw new DivisionEntreCero();
    }

    if($numero1<0 ||$numero2<0){
      throw new NumeroNegativo();

    }

    return $numero1/$numero2;
  }

  try {
    echo dividir(6,0);

  } catch (DivisionEntreCero $e) {
    echo "se presento un error: ".$e->mensajeError();
  }catch(NumeroNegativo $negativo){
    echo "se presento un error: ".$negativo->mensajeError();
  }finally{
    echo '<p>se realizo una division</p>';
  }


 ?>
