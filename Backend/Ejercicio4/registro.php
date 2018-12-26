<?php
  include('crear_datos.php');
  $usuario_acceso = $padre1;
  $tipo_acceso = get_class($usuario_acceso);
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
    <?php if ($tipo_acceso == 'Estudiante') { ?>
    <div class="row">
      <div class="col s12">
          <h5>¡Hola <?php echo $usuario_acceso->getNombre() ?>!</h5>
          <div class="chip">Estas son las asignaturas que cursas</div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <table class="striped">
            <thead>
              <tr>
                  <th>Nombre</th>
                  <th>Nota 1</th>
                  <th>Nota 2</th>
                  <th>Nota 3</th>
                  <th>Definitiva</th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($usuario_acceso->getAsignaturas() as $key => $value) { ?>
                <tr>
                  <td><?php echo $value->getNombre()?></td>
                  <td><?php echo number_format($value->getNota1(),1,'.','')?></td>
                  <td><?php echo number_format($value->getNota2(),1,'.','')?></td>
                  <td><?php echo number_format($value->getNota3(),1,'.','')?></td>
                  <td class="nota-definitiva"><?php echo number_format($value->calcularPromedio(),1,'.','')?></td>
                </tr>
              <?php } ?>
            </tbody>
          </table>
      </div>
    </div>
    <?php } ?>
    <?php if ($tipo_acceso == 'Profesor') { ?>
    <div class="row">
      <div class="col s12">
          <h5>¡Hola <?php echo $usuario_acceso->getNombre() ?>!</h5>
          <div class="chip">Estas son los estudiantes a los que das clases y sus notas</div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <table class="striped">
            <thead>
              <tr>
                  <th>Nombre</th>
                  <th>Grado</th>
                  <th>Asignaturas que cursa</th>
                  <th>Calificaciones</th>
                  <th>Nota definitiva</th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($usuario_acceso->getEstudiantes() as $key => $estudiante) { ?>
                <tr>
                  <td><?php echo $estudiante->getNombre()?></td>
                  <td><?php echo $estudiante->getCurso()?></td>
                  <td>
                    <table class="bordered">
                      <?php foreach ($estudiante->getAsignaturas() as $key => $asignatura) { ?>
                      <tr>
                        <td><?php echo $asignatura->getNombre()?></td>
                      </tr>
                      <?php } ?>
                    </table>
                  </td>
                  <td>
                    <table class="bordered">
                      <?php foreach ($estudiante->getAsignaturas() as $key => $asignatura) { ?>
                      <tr>
                        <td><?php echo number_format($asignatura->getNota1(),1,'.','')?></td>
                        <td><?php echo number_format($asignatura->getNota2(),1,'.','')?></td>
                        <td><?php echo number_format($asignatura->getNota3(),1,'.','')?></td>
                      </tr>
                      <?php } ?>
                    </table>
                  </td>
                  <td>
                    <table class="bordered">
                      <?php foreach ($estudiante->getAsignaturas() as $key => $asignatura) { ?>
                      <tr>
                        <td class="nota-definitiva"><?php echo number_format($asignatura->calcularPromedio(),1,'.','')?></td>
                      </tr>
                      <?php } ?>
                    </table>
                  </td>
                </tr>
              <?php } ?>
            </tbody>
          </table>

      </div>
    </div>
    <?php } ?>
    <?php if ($tipo_acceso == 'Padre') { ?>
    <div class="row">
      <div class="col s12">
          <h5>¡Hola <?php echo $usuario_acceso->getNombre() ?>!</h5>
          <div class="chip">Estas son las notas de tus hijos</div>
      </div>
    </div>
    <div class="row">
      <div class="col s12">
        <table class="striped">
            <thead>
              <tr>
                  <th>Nombre</th>
                  <th>Grado</th>
                  <th>Asignaturas que cursa</th>
                  <th>Nota definitiva</th>
              </tr>
            </thead>
            <tbody>
              <?php foreach ($usuario_acceso->getHijos() as $key => $estudiante) { ?>
                <tr>
                  <td><?php echo $estudiante->getNombre()?></td>
                  <td><?php echo $estudiante->getCurso()?></td>
                  <td>
                    <table class="bordered">
                      <?php foreach ($estudiante->getAsignaturas() as $key => $asignatura) { ?>
                      <tr>
                        <td><?php echo $asignatura->getNombre()?></td>
                      </tr>
                      <?php } ?>
                    </table>
                  </td>
                  <td>
                    <table class="bordered">
                      <?php foreach ($estudiante->getAsignaturas() as $key => $asignatura) { ?>
                      <tr>
                        <td class="nota-definitiva"><?php echo number_format($asignatura->calcularPromedio(),1,'.','')?></td>
                      </tr>
                      <?php } ?>
                    </table>
                  </td>
                </tr>
              <?php } ?>
            </tbody>
          </table>
      </div>
    </div>
    <?php } ?>
  </div>



  <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
  <script type="text/javascript" src="js/materialize.min.js"></script>
  <script type="text/javascript" src="js/registro.js"></script>
</body>
</html>
