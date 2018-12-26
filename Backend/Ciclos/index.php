<!-- <?php
  // $a=0;
  //
  // while($a<=10){
  //   echo '<p>el valor de a es: '.$a.'</p>';
  //   $a++;
  // };
  //
  // echo'-----------------------';
  //
  // $b=0;
  //
  // do{
  //   echo '<p>el valor de b es: '.$b.'</p>';
  //   $b++;
  // }while($b<=5)

 ?> -->

<?php $arreglo=['PEDRO','JUAN','SANTIAGO','PABLO'] ?>
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
    <h1>CICLOS</h1>
    <table>
      <tr>
        <th>numero</th>
        <th>mensaje</th>
      </tr>
<!-- <?php //for($i=0;$i<=10;$i++){
?>        <tr>
            <th><?php //echo $i; ?></th>
            <th>hola<?php //echo $i; ?></th>
          </tr>
<?php
      //  }
?> -->
      <?php foreach($arreglo as $posicion => $valor ){ ?>
        <tr>
          <th><?php echo $posicion; ?></th>
          <th><?php echo $valor; ?></th>
        </tr>
        <?php
      } ?>
    </table>

  </body>
</html>
