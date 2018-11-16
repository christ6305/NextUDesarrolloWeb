var configuration = {
	program: "WEB",
	//program: "UIUX",
	//program: "no",
	activityName: "",
	ActivityDescription: `JavaScript es un lenguaje que interactúa constantemente con los elementos del DOM, y por tal motivo sus selectores son tan importantes. No obstante, para hacer una selección debíamos optar por diferentes métodos de acuerdo con el tipo de objeto a elegir, resultando en selectores complejos y de longitud considerable. 

Mediante el uso de jQuery, esta importante labor se simplifica al obviar la invocación del objeto document, así como la condensación de todos los métodos de selección en un sólo conjunto de caracteres. Esta gran ayuda que nos ofrece la librería, permite que las selecciones sean más similares a la forma en que las hacemos en las hojas de estilos CSS, facilitando la definición de selectores simples o complejos, así como de hacer un proceso de desarrollo más unificado y legible. En la tabla a continuación puedes ver una comparción de una selección hecha con JS y la misma selección con jQuery:

<div >
    <div class='col-xs-8'>
    <center class=\'language-javascript\'> <div><pre class=\'line-numbers\'> <code>
document.getElementById('idElemento')
document.getElementByClassName('claseElemento')
document.getElementByTagName('div')
</code></pre> </div></center>
        
    </div>
    <div class='col-xs-4'>
    <center class=\'language-javascript\'> <div><pre class=\'line-numbers\'> <code>
$('#idElemento')
$('.claseElemento')
$('div')
</code></pre> </div></center>
        
    </div>
</div>

Como desarrollador, en muchas ocasiones te verás en la necesidad de examinar código ya creado por otra persona y es muy importante que desarrolles las competencias necesarias para poder trabajar en proyectos de este tipo. En esta ocasión te han entregado una página web ya construida en su totalidad y a la cual debes hacer unas pequeñas modificaciones en el color de letra. Para esto debes usar los selectores jQuery con el fin de realizar los cambios de estilo en los ítems presentados en las siguientes instrucciones.
`,
	content : "A continuación podrás descargar el contenido base para realizar este ejercicio.",
	goodp: ["Es recomendable hacer uso de los selectores avanzados antes que añadir clases o ids de manera excesiva, ya que esto puede crear conflictos con frameworks o recursos externos que interactúen con este tipo de atributos. Las búsquedas sobre las selecciones son muy útiles en este tipo de escenarios y su uso adecuado permite añadir las acciones deseadas a los elementos correctos."], // el texto Buenas Prácticas no irá si este array está vacio o no está
	instructions : ['Crea los selectores en el archivo <strong>selecciones.js</strong> que se mencionan en los siguientes pasos. Ubícalos dentro del bloque de código que se indica en el comentario del archivo.<br>El archivo <strong>index.html</strong> no puede ser modificado, por lo tanto no puedes añadir clases o ids a sus elementos. Para realizar las selecciones debes usar todas las herramientas de selección que ofrece jQuery.',`Toma cada una de las selecciones que te vamos a lista a continuación y utilizando la siguiente línea de código, cambiales el color a amarillo:<center class="language-javascript"> <div><pre class="line-numbers"> <code>$("#seleccion").css("color","yellow")</code></pre> </div></center> Empecemos:<ul> <li> El título “We love to tell your story”, el ícono flecha abajo debajo del título “see portfolio” y la palabra “Home” en la barra de navegación.<center><img src="solucion/img1.png" style="width: 550px;"></center> </li><li> El texto “15 images” en la imágen de la mitad de la primera fila únicamente, en la sección “Portfolio”.<center><img src="solucion/img2.png" style="width: 550px;"></center> <li>El párrafo de descripción que inicia con “Far far away…” debajo del título Jean Smith, en la sección “About”<center><img src="solucion/img3.png" style="width: 550px;"></center></li><li>El texto del botón “Get in touch” en la sección “Contact”<center><img src="solucion/img4.png" style="width: 550px;"></center></li><li>Los nombres de los autores de las frases en el slider y el texto “Designed by..” en la sección del footer, sin cambiar el color de los links.<center><img src="solucion/img4.png" style="width: 550px;"></center></li></li></ul>`], // el texto Instrucciones no irá si este array está vacio o no está
	type: "exercise-code",
	time: [30,'min.','minutos'],
	solutionTitle: "SOLUCIÓN TEST", // Si no está, aparecerá "Solución" por defecto
	solution: 'solucion/solucionEjercicio.zip',  // si no está o está vacio no aparecerá
	base : 'solucion/codBaseEjercicio.zip' // si no está o está vacio no aparecerá
}

$.getScript( "../../includes/js/" + configuration.type + ".js" )
$('.backdrop').on('click', function() {
	$('#alert').toggleClass('active');
})
