var configuration = {
	program: "WEB",
	//program: "UIUX",
	//program: "no",
	activityName: "",
	ActivityDescription: `Es claro como jQuery aporta una gran cantidad de herramientas para facilitar el desarrollo en JavaScript. Sin embargo el uso de una librería como jQuery UI extiende las características que se pueden implementar en un proyecto, especialmente enfocados en los elementos gráficos para presentar la información de una manera más agradable y elaborada al usuario final.<br><br>
Todas las características que componen la librería jQuery UI se reúnen en tres categorías: efectos, widgets e interacciones. En la primera categoría se incluyen todas las animaciones predefinidas para añadir movimiento a los métodos de jQuery; en la segunda se reúnen todos los componentes predefinidos para mostrar información y en la tercera las animaciones y efectos diseñados para definir nuevas acciones del usuario con la página.
<br><br>
En este ejercicio te encargarás de añadir una serie de funcionalidades a una galería fotográfica, a través de efectos, widgets e interacciones de jQuery UI. El cliente requiere que optimices la forma en la que se muestra la información de la galería, así como complementar la experiencia de visualización de las fotos. Al finalizar el ejercicio debes obtener el siguiente resultado:
<br><br><center><video width="600" controls><source src="video.mp4" type="video/mp4"></video></center><br><strong>: </strong>Para realizar el ejercicio puedes modificar el código HTML, cambiar etiquetas y agregar atributos como id o clases. Observa el archivo estilos.css y sus comentarios para que uses todas las clases que necesites al construir el ejercicio, este archivo también lo puedes modificar si deseas.`,
	goodp: ["Al momento de añadir efectos a una página web, ten en cuenta de no saturar los contenidos ya que en ocasiones, queremos usar todas las herramientas de las librerías en cuanto sea posible sin considerar que lo más importante es la información que va a llegar al usuario."], // el texto Buenas Prácticas no irá si este array está vacio o no está
	content : "Para el desarrollo de este ejercicio descarga el archivo base que te dejamos en el siguiente link:",
	instructions : ['Haz que la lista en la columna izquierda de categorías sea un menú, y al hacer click en cada categoría sólo se muestren las fotos correspondientes.<center> <img src="img2.png" style="width: 600px"></center>','Implementa un widget que muestre adecuadamente la información de las categorías en la columna izquierda de la página.<center> <img src="img3.png" style="width: 600px"></center>','Las imágenes se deben mostrar en una ventana con un tamaño más grande, y con un efecto especial para mostrar y ocultar al hacer click sobre ellas.<center> <img src="img4.png" style="width: 600px"></center>','Al arrastrar una imagen al contenedor “eliminar”, se deje de mostrar y se oculte con un efecto adecuado.<center> <img src="img5.png" style="width: 600px"></center>','Al arrastrar una imagen al contenedor “favoritos” el color de fondo cambie, y se ubique la imagen en el contenedor. Después de ubicar la imagen, ésta ya no podrá ser arrastrada.<center> <img src="img6.png" style="width: 600px"></center>'], // el texto Instrucciones no irá si este array está vacio o no está
	type: "exercise-code",
	time: [45,'min.','minutos'],
	solution: 'solucion/NextUsolucionGaleria.zip',  // si no está o está vacio no aparecerá
	base : 'solucion/NextUcodBaseGaleria.zip' // si no está o está vacio no aparecerá
}

$.getScript( "../../includes/js/" + configuration.type + ".js" )
$('.backdrop').on('click', function() {
	$('#alert').toggleClass('active');
})
