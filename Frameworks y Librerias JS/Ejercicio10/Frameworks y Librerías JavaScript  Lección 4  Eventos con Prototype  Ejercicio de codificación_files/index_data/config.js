var configuration = {
	program: "WEB",
	//program: "UIUX",
	//program: "no",
	activityName: "",
	ActivityDescription: `
Los eventos representan la manera en cómo dar respuesta a las acciones que ejecuta un usuario en su experiencia con una plataforma web. Es claro que en proyectos de desarrollo siempre debemos toparnos con algunos cuantos eventos puesto que la persona que accede a la página debe estar en control de la información que allí se le pueda mostrar; por tal motivo es preferible darle herramientas de interacción para facilitar su objetivo.<br><br>

En Prototype encontramos formas diversas y sencillas de definir eventos, simplificando notablemente la forma en la que se hacen en JavaScript. El objeto que permite la definición de eventos en esta librería es Event, al cual se le invoca el método observe. Gracias a este método se pueden especificar en sus parámetros las diferentes especificaciones del evento como tal, entre los cuales se encuentra el elemento que dispara el evento, la acción del usuario que lo dispara y la función que se ejecuta al ser disparado. Recordemos la sintaxis:<br>

<center class=\'language-javascript\'> <div><pre class=\'line-numbers\'> <code>
Event.observe('idElemento','click', function(){
    //Acciones al disparar el evento
})
</code></pre> </div></center>

Durante los videos de esta lección, se inició la construcción de un videojuego de emparejamiento de imágenes. En este ejercicio debes completar el proyecto complementando las funcionalidades necesarias para que se pueda realizar una partida completa, contabilizando tiempos y creando tableros aleatorios para cada una.<br><br>
<center><video width="600" controls><source src="video.mp4" type="video/mp4"></video></center>`,
	goodp: ["De acuerdo con las posibilidades que otorga Prototype al momento de definir eventos, es recomendable manejar un estándar, de tal manera que si se elige definirlos usando el objeto Event, todos los eventos del proyecto usen esta misma estructura. Esto permitirá tener uniformidad en el código lo que lo hará más legible y mantenible a lo largo del tiempo."], // el texto Buenas Prácticas no irá si este array está vacio o no está
	content : "Para el desarrollo de este ejercicio descarga el archivo base que te dejamos en el siguiente link:",
	instructions : ['Una vez se seleccionen dos imágenes, no se puede mostrar ninguna otra imágen.<center> <img src="img1.png" style="width: 600px"></center>','Verificar si las dos imágenes seleccionadas coinciden. En caso de coincidencia se debe crear el efecto que los bloques correspondientes desaparezcan del tablero. En caso contrario, se deben esconder de nuevo.<center> <img src="img2.png" style="width: 600px"></center>','Al presionar el switch se debe reiniciar el juego, retornando todos los bloques a su apariencia original.<center> <img src="img3.png" style="width: 600px"></center>','Crear una función que ubique los bloques de manera aleatoria en la página cada nuevo juego.<div class="row"> <div class="col-xs-6" style="padding: 15px"> <center> <img src="img4.png" style="width: 600px"></center> </div><div class="col-xs-6" style="padding: 15px"> <center> <img src="img5.png" style="width: 600px"></center> </div></div>','Aplicar un plugin de Cronómetro en JavaScript para contabilizar el tiempo que se demora el jugador en completar el tablero.<center> <img src="img6.png" style="width: 600px"></center>'], // el texto Instrucciones no irá si este array está vacio o no está
	type: "exercise-code",
	time: [45,'min.','minutos'],
	solution: 'solucion/NextUsolucionEventosPrototype.zip',  // si no está o está vacio no aparecerá
	base : 'solucion/NextUcodBaseEventosPrototype.zip' // si no está o está vacio no aparecerá
}

$.getScript( "../../includes/js/" + configuration.type + ".js" )
$('.backdrop').on('click', function() {
	$('#alert').toggleClass('active');
})
