<?php
  const CATEGORIAS = array('profesor', 'estudiante', 'padre');
  const MOD_PROFESOR = array('asignaturas', 'registro de notas', 'reuniones', 'tutorías');
  const MOD_ESTUDIANTE = array('asignaturas cursadas', 'registro de notas');
  const MOD_PADRE = array('reuniones', 'registro de notas');
  $tipo_acceso = 'profesor';
 ?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1.0"/>
  <!--Importar la fuente de los íconos de Google-->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <!--Importar la hojas de estilos de materialize css-->
  <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/customColors.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <link href="css/index.css" type="text/css" rel="stylesheet" media="screen,projection"/>
  <title>Educación</title>
</head>
<body>
  <nav class="teal">
    <div class="nav-wrapper">
      <a href="#" class="brand-logo"><i class="material-icons">school</i></a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="">Configuración</a></li>
        <li><a href="">Ayuda</a></li>
        <li><a href="">Cerrar Sesión</a></li>
      </ul>
    </div>
  </nav>
  <div class="row">
    <div class="col s12">
      <h1>Mis Tareas</h1>
    </div>
  </div>
  <div class="container">

    <?php if ($tipo_acceso == CATEGORIAS[0]) {  ?>

    <div class="row mod-container">
      <div class="col s5">
        <div class="card">
          <div class="card-image">
            <img src="img/im1.jpg">
          </div>
        </div>
      </div>
      <div class="col s7">
        <h3>Módulo de profesor</h3>
        <p>
          En este módulo encuentras todo lo relacionado con tus cursos y clases; adicionalmente todas las opciones para registrar notas. ¿A qué módulo deseas acceder?
        </p>
        <form class="" action="index.html" method="post">
          <div class="input-field col s12">
             <select>
               <?php foreach (MOD_PROFESOR as $key => $value) { ?>
                 <option value="<?php echo $value ?>"><?php echo $value ?></option>
               <?php } ?>
             </select>
             <label class="teal-text">Módulo</label>
           </div>
        </form>
      </div>
    </div>
    <?php } ?>
    <?php if ($tipo_acceso == CATEGORIAS[1]) {  ?>
    <div class="row mod-container">

      <div class="col s7">
        <h3>Módulo de estudiante</h3>
        <p>
          En este módulo encuentras todo lo relacionado con los cursos que estás tomando. ¿A qué módulo deseas acceder?
        </p>
        <form class="" action="index.html" method="post">
          <div class="input-field col s12">
             <select>
               <<?php foreach (MOD_ESTUDIANTE as $key => $value) { ?>
                 <option value="<?php echo $value ?>"><?php echo $value ?></option>
               <?php } ?>
             </select>
             <label class="teal-text">Módulo</label>
           </div>
        </form>
      </div>
      <div class="col s5">
        <div class="card">
          <div class="card-image">
            <img src="img/im2.jpg">
          </div>
        </div>
      </div>
    </div>
    <?php } ?>
    <?php if ($tipo_acceso == CATEGORIAS[2]) {  ?>
    <div class="row mod-container">
      <div class="col s5">
        <div class="card">
          <div class="card-image">
            <img src="img/im3.jpg">
          </div>
        </div>
      </div>
      <div class="col s7">
        <h3>Módulo Padre de familia</h3>
        <p>
          En este módulo encuentras todo lo relacionado con el seguimiento académico a tus hijos. ¿A qué módulo deseas acceder?
        </p>
        <form class="" action="index.html" method="post">
          <div class="input-field col s12">
             <select>
               <?php foreach (MOD_PADRE as $key => $value) { ?>
                 <option value="<?php echo $value ?>"><?php echo $value ?></option>
               <?php } ?>
             </select>
             <label class="teal-text">Módulo</label>
           </div>
        </form>
      </div>
    </div>
    <?php } ?>
    <div class="row">
      <div class="col s2">
        <div class="collection">
          <?php
          $a = 1;
          while ($a <= 11) { ?>
            <a href="#" class="collection-item">Grado: <?php echo $a ?></a>
          <?php
          $a++;
          } ?>
        </div>
      </div>
      <div class="card-panel col s10">
        <div class="calendar-container">
          <div class="days">
            <span>Domingo</span>
            <span>Lunes</span>
            <span>Martes</span>
            <span>Miercoles</span>
            <span>Jueves</span>
            <span>Viernes</span>
            <span>Sábado</span>
          </div>
          <?php
          $days = 1;
          do { ?>
            <div class="calendar-item hoverable"><span><?php echo $days ?></span></div>
          <?php
            $days++;
          } while ($days < 31); ?>

        </div>
      </div>

    </div>


  </div>



  <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script type="text/javascript" src="js/materialize.min.js"></script>
  <script type="text/javascript" src="js/index.js"></script>
</body>
</html>
