var configuration = {
	program: "WEB",
	//program: "UIUX",
	//program: "no",
	activityName: "",
	ActivityDescription: `Además de las funcionalidades que ofrece jQuery para simplificar el proceso de desarrollo, también permite realizar animaciones en una página web permitiendote como desarrollador crear gran variedad de efectos dinámicos a sus elementos. Es tal el poder de esta librería en este aspecto, que podemos crear videojuegos interactivos fácilmente, así como movimientos personalizados de los elementos.
<br><br>
El método de esta librería que nos permite alcanzar todas estas posibilidades es <strong>animate</strong>. Corresponde a un método con una gran cantidad de parámetros en los que se definen los cambios de estilo que tendrá un elemento del DOM, la duración de dichos cambios, la forma en que serán aplicados e incluso el orden de su ejecución. Recordemos su sintaxis:<br>

    <center class=\'language-javascript\'> <div><pre class=\'line-numbers\'> <code>
$(elemento).animate(
{
    top: '20px',
    left: '300px'
}, {
    queue: false
}, 800)
</code></pre> </div></center>
En los vídeos de esta lección se ha iniciado el desarrollo de un videojuego de fútbol. En este ejercicio debes completar dicho proyecto añadiendo un conjunto de funcionalidades adicionales para que se pueda cobrar un tiro penalty a una portería con un arquero.
<br><br>
<center><video width="600" controls><source src="video.mp4" type="video/mp4"></video></center>`,
	goodp: ["El método animate puede ser usado sobre el mismo elemento simultáneamente. En este caso se debe hacer un uso correcto del atributo queue, el cual determina si las animaciones se ejecutan simultáneamente o una tras otra. Esta forma de organizar las animaciones en jQuery según su orden es preferible a usar la función setTimeout de JavaScript."], // el texto Buenas Prácticas no irá si este array está vacio o no está
	content : "Para el desarrollo de este ejercicio descarga el archivo base que te dejamos en el siguiente link:",
	instructions : ['Hacer que el arquero se mueva de izquierda a derecha a lo ancho de la portería a una velocidad menor a la de la flecha que realiza este mismo movimiento.<center> <img src="img1.png" style="width: 600px"></center>','Crear una animación para cuando el balón sea disparado por fuera del arco, mostrando que el balón sigue su trayectoria incluso detrás del arco.<center> <img src="img2.png" style="width: 600px"></center>','Crear una animación para cuando el balón golpee el poste derecho, haciendo que el balón rebote hacia la derecha y salga de la pantalla.<center> <img src="img3.png" style="width: 600px"></center>','Crear una animación para cuando el balón golpee el poste izquierdo, haciendo que el balón rebote hacia la izquierda y salga de la pantalla.<center> <img src="img4.png" style="width: 600px"></center>','Crear una animación para cuando el balón golpee el travesaño, haciendo que el balón rebote hacia arriba y salga de la pantalla.<center> <img src="img5.png" style="width: 600px"></center>','Crear una animación para cuando el balón golpee el arquero, haciendo que el balón rebote hacia arriba y salga de la pantalla.<center> <img src="img6.png" style="width: 600px"></center>','Si el balón golpea el pie derecho del portero, debe rebotar hacia esta dirección y salir de la pantalla.<center> <img src="img7.png" style="width: 600px"></center>','Si el balón golpea el pie izquierdo del portero, debe rebotar hacia esta dirección y salir de la pantalla.<center> <img src="img8.png" style="width: 600px"></center>','Mostrar el letrero de la etiqueta h1 en el archivo HTML y hacer que cambie de color una vez se haya mostrado cuando se meta un gol.<center> <img src="img9.png" style="width: 600px"></center>','Reiniciar el juego  al presionar el botón en la parte superior derecha.<center> <img src="img10.png" style="width: 600px"></center>'], // el texto Instrucciones no irá si este array está vacio o no está
	type: "exercise-code",
	time: [45,'min.','minutos'],
	solution: 'solucion/NextUsolucionAnimacion.zip',  // si no está o está vacio no aparecerá
	base : 'solucion/NextUcodBaseAnimacion.zip' // si no está o está vacio no aparecerá
}

$.getScript( "../../includes/js/" + configuration.type + ".js" )
$('.backdrop').on('click', function() {
	$('#alert').toggleClass('active');
})
