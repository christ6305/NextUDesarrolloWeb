var configuration = {
	program: "WEB",
	//program: "UIUX",
	//program: "no",
	activityName: "",
	ActivityDescription: `La librería Prototype crea un ambiente de desarrollo en JavaScript simplificado y ofrece una gran cantidad de Objetos y métodos predefinidos para facilitar el proceso de codificación. Uno de los primeros conceptos que se deben dominar en Prototype es la selección de elementos del DOM, la cual se hace simple mediante el selector de id ($) o el selector CSS ($$), dependiendo del número de caracteres signo pesos que se usen. <br><br>

Adicionalmente, esta librería dispone de una variedad de herramientas que seleccionan elementos a partir de atributos propios de las etiquetas tales como el valor de los elementos del formulario con el selector $F. <br>
<center class=\'language-javascript\'> <div><pre class=\'line-numbers\'> <code>
$('idElemento') //Retorna el elemento
$('selectorCSS') //Retorna un arreglo de elementos
$('elementoFormulario') //Retorna el valor del elemento
</code></pre> </div></center>
<br>
<center> <img src="img1.png" style="width: 600px"></center>

<br>
Para el desarrollo de este ejercicio debes, mediante un archivo js y haciendo uso de Prototype, seleccionar los elementos indicados en las instrucciones, asignarlos a variables e imprimirlos en consola. Ten en cuenta las siguientes consideraciones para el desarrollo de este ejercicio:
<ul>
<li>No podrás modificar los archivos HTML para este ejercicio, por ende debes encontrar la manera de acceder a los elementos indicados.</li>

<li>La página sobre la que se debe trabajar utiliza el framework Bootstrap, el cual usa jQuery. Debes encontrar la manera de importar el framework Prototype sin entrar en conflictos con jQuery.</li>
<li>Crea una función en Prototype que ejecuta acciones una vez se haya cargado el DOM.</li> 
<li>Implementa una manera de mostrar en forma de texto los elementos de las selecciones para mostrarlos en consola.</li>
</ul>`,
	goodp: ["Ten en cuenta qué tipo de selectores retornan elementos o arreglos, ya que de esto depende que funcionen métodos como next, down, up, entre otros. El trabajo con objetos en Prototype es muy común y siempre se debe tener presente el tipo de resultado que arroja un selector en particular."], // el texto Buenas Prácticas no irá si este array está vacio o no está
	content : "Para el desarrollo de este ejercicio descarga el archivo base que te dejamos en el siguiente link:",
	instructions : ['<strong>Selecciones para el archivo index.js</strong><center> <img src="img2.png" style="width: 600px"></center><ol> <li>El título con el texto “Colombia”.</li><li>Los tres botones de navegación debajo del título de la página.</li><li>La primera fila de íconos en la parte inferior derecha de la página.</li><li>Todos los elementos padres del enlace que va a la página contacto en la barra de navegación.</li><li>El elemento antes del texto en el párrafo principal de la página.</li></ol>','<strong>Selecciones para el archivo portafolio.js</strong><center> <img src="img3.png" style="width: 600px"></center><ol> <li>El título de la descripción de Santa Marta.</li><li>El botón oculto en la barra de navegación.</li><li>La imágen de la descripción de Pasto.</li><li>El enlace externo a la página oficial.</li></ol>','<strong>Selecciones para el archivo contacto.js</strong><br>Las selecciones de esta página deben realizarse mediante la clase Selector. Se debe llenar el formulario con valores aleatorios antes de realizar las selecciones.<center> <img src="img4.png" style="width: 600px"></center><ol><li>El valor del campo nombre.</li><li>El valor del campo email.</li><li>El valor del campo masculino.</li><li>El valor del campo femenino.</li></ol>','Verificar si el botón de Enviar formulario es de tipo input.'], // el texto Instrucciones no irá si este array está vacio o no está
	type: "exercise-code",
	time: [20,'min.','minutos'],
	solution: 'solucion/nextUsolucionSelectores.zip',  // si no está o está vacio no aparecerá
	base : 'solucion/nextUcodBaseSelectores.zip' // si no está o está vacio no aparecerá
}

$.getScript( "../../includes/js/" + configuration.type + ".js" )
$('.backdrop').on('click', function() {
	$('#alert').toggleClass('active');
})
