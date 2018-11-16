var configuration = {
	program: "WEB",
	//program: "UIUX",
	//program: "no",
	activityName: "",
	ActivityDescription: `A medida que se conoce más sobre las funcionalidades de una herramienta, se pueden utilizar acciones cada vez más avanzadas, lo que permite además de dinamismo e interactividad en la 4página, la capacidad de gestionar y administrar información relevante de acuerdo a las necesidades del usuario. <br><br>

jQuery además de facilitar la selección y modificación de elementos permite realizar reemplazos, eliminaciones y ordenamientos. Por ejemplo, existen dos formas de eliminar elementos, la primera mediante el método remove en la que se elimina de la estructura del DOM el elemento y también se remueven todos los datos de JavaScript que tenía asociados; la segunda con el método detach que remueve el elemento del árbol del DOM pero mantiene los datos JavaScript en caso tal de que pueda ser insertado nuevamente. Recordemos su sintaxis:<br>


<div class="row">
    <div class="col-xs-6" style="padding: 15px;">
        <center class=\'language-javascript\'> <div><pre class=\'line-numbers\'><code>
        $('selector').remove()</code></pre> </div></center>
    </div>
    <div class="col-xs-6" style="padding: 15px;">
    <center class=\'language-javascript\'> <div><pre class=\'line-numbers\'> <code>
    $('selector').detach()</code></pre> </div></center>
    </div>
</div>
<br>
Una empresa fabricante de productos de cocina requiere añadir un conjunto de funcionalidades a su sistema de inventario. En este ejercicio debes agregarle la funcionalidad correspondientes a las acciones de la tabla de inventarios, permitiendo al sistema hacer ordenamientos por varios criterios, eliminación y sustitución de ítems.
<center> <img src="img1.png" style="width: 600px"></center>`,
	goodp: ["El uso de métodos que remueven elementos del DOM se torna muy delicado en cuanto a que el desarrollador debe estar muy seguro de no volver a necesitar éste ítem posteriormente. Se debe tener claro qué elementos se usarán nuevamente en la página, en este caso es preferible esconderlos con un método hide."], // el texto Buenas Prácticas no irá si este array está vacio o no está
	content : "Para el desarrollo de este ejercicio descarga el siguiente archivo base. En el archivo encontrarás el diseño de la página y algunas funciones de jQuery implementadas.",
	instructions : ['Eliminar un elemento junto con su respectivo checkbox, después de hacer click en él y presionar en el ícono de la basura. <center> <img src="img2.png" style="width: 600px"></center>','Deshacer la última eliminación que se haya realizado al presionar el segundo botón con la flecha.<center> <img src="img3.png" style="width: 600px"></center>','Restringir la selección de los checkbox de la columna derecha para que sólo puedan estar seleccionados dos al tiempo. Si estando dos seleccionados, se intenta hacer lo mismo con un tercero, uno de los dos seleccionados debe retornar a su estado original.<center> <img src="img4.png" style="width: 600px"></center>','Intercambiar las posiciones de los ítems seleccionados en los checkbox al presionar el botón con el ícono de las dos flechas.<center> <img src="img5.png" style="width: 600px"></center>','Al modificar el valor del selector con el título “Ordenar por” de la derecha, se deben ordenar los ítems de acuerdo con el valor del selector, por nombre, precio, o marca según corresponda. En caso del criterio de ordenamiento ser nombre o marca, debe ser alfabéticamente, mientras que si es por precio debe ser de menor a mayor.<br><br><center><video width="600" controls><source src="video.mp4" type="video/mp4"></video></center>'], // el texto Instrucciones no irá si este array está vacio o no está
	type: "exercise-code",
	time: [45,'min.','minutos'],
	solution: 'solucion/NextUsolucionManipulacion.zip',  // si no está o está vacio no aparecerá
	base : 'solucion/NextUcodBaseManipulacion.zip' // si no está o está vacio no aparecerá
}

$.getScript( "../../includes/js/" + configuration.type + ".js" )
$('.backdrop').on('click', function() {
	$('#alert').toggleClass('active');
})
