<?php
  require('clases.php');
  $asig1 = new Asignatura('Matematicas', 5.0, 4.2, 3.4);
  $asig2 = new Asignatura('Ciencias', 2.0, 1.6, 4.2);
  $asig3 = new Asignatura('Biología', 2.4, 3.0, 3.0);
  $asig4 = new Asignatura('Lenguaje', 2.1, 0.0, 3.0);
  $asig5 = new Asignatura('Deporte', 4.9, 4.3, 4.2);

  $est1 = new Estudiante('Santiago Rodriguez', 'Tercero', '2016');
  $est1->addAsignatura($asig1);
  $est1->addAsignatura($asig2);
  $est1->addAsignatura($asig3);
  $est1->addAsignatura($asig4);
  $est1->addAsignatura($asig5);

  $est2 = new Estudiante('Laura Pérez', 'Sexto', '2016');
  $est2->addAsignatura($asig1);
  $est2->addAsignatura($asig2);
  $est2->addAsignatura($asig4);
  $est2->addAsignatura($asig5);

  $est3 = new Estudiante('Maria Rodriguez', 'Octavo', '2016');
  $est3->addAsignatura($asig1);
  $est3->addAsignatura($asig2);
  $est3->addAsignatura($asig3);
  $est3->addAsignatura($asig4);

  $prof1 = new Profesor('Juan Carlos Fernandez');
  $prof1->addEstudiante($est1);
  $prof1->addEstudiante($est2);
  $prof1->addEstudiante($est3);

  $padre1 = new Padre('Gonzalo Rodriguez');
  $padre1->addHijo($est1);
  $padre1->addHijo($est3);



 ?>
