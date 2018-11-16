var configuration = {
	program: "WEB",
	//program: "UIUX",
	//program: "no",
	activityName: "",
	ActivityDescription: `<p><span style="font-weight: 400;">Los eventos definen la forma en la que el usuario interact&uacute;a con la p&aacute;gina y permiten que realice acciones que tengan efectos en la presentaci&oacute;n de la informaci&oacute;n. La inclusi&oacute;n de eventos en un proyecto web, se abren las posibilidades para mejorar la experiencia de uso del mismo, as&iacute; como prevenir comportamientos no deseados tales como los validadores de un formulario.</span></p>
<p><span style="font-weight: 400;">Dentro de la lista de eventos podemos identificar algunos de los m&aacute;s usados como click, keypress, mousedown, mouseup, etc. Sin embargo en jQuery podemos definir acciones para tales eventos de una manera muy simplificada que permite concentrarnos en las acciones que se ejecutar&aacute;n, m&aacute;s que por el evento que las dispara, ya que de eso se ocupa el selector correspondiente. </span></p>
<p><strong><br /><span style="font-weight: 400;">La forma de usar un evento correctamente es mediante el callback de su m&eacute;todo correspondiente, as&iacute; como lo muestra el siguiente evento.</span></strong></p>
<center class=\'language-javascript\'> <div><pre class=\'line-numbers\'> <code>
$('selector').mouseenter(function){\n\t//Acciones a ejecutar cuando se dispara el evento\n})</code></pre> </div></center><br>
Un cliente tiene un formulario que hace parte de su portal web empresarial, y requiere que mediante el uso de jQuery realices la validación de los campos de dicho formulario. Al diligenciar el formulario debes obtener validadores que se vean de la siguiente manera.<br><br>
<center><img src="img1.png"></center>`,
	goodp: ["Una de las maneras más comunes de definir las acciones de cada evento es usar una función anónima en su propio callback. Sin embargo, si existen acciones que se repiten en diferentes eventos, es más recomendable usar una función definida ya que se puede invocar las veces que sea necesario sin necesidad de repetir código."], // el texto Buenas Prácticas no irá si este array está vacio o no está
	instructions : ['Al desplazarse hacia abajo en la página 200 píxeles, la imagen de fondo debe cambiar a background2.jpg que se ubica en la carpeta de imágenes.','Al seleccionar un color en el campo de “Color favorito” el cuadrado que hay al lado del campo debe adquirir el color seleccionado.</code></pre> </div></center><center> <img src="img2.png" style="width: 600px"></center> ','Al seleccionar cualquier campo del formulario se debe mostrar el mensaje informativo que se encuentra definido en el HTML. Sólo se debe mostrar el mensaje informativo correspondiente al campo seleccionado.</code></pre> </div></center><center> <img src="img3.png" style="width: 600px"></center>','En el momento de retirar la selección de un campo, validar si el campo está vacío, si lo está mostrar el mensaje de error y asignar el estilo de error al campo.</code></pre> </div></center><center> <img src="img4.png" style="width: 600px"></center>','En el momento de retirar la selección del campo Email, verificar si el texto contiene los caracteres “@” (arroba) y “.” (punto), si no los contiene, mostrar el mensaje de error de email definido en el HTML y asignar el estilo de error al campo.</code></pre> </div></center><center> <img src="img5.png" style="width: 600px"></center>','Al escribir en el campo “Contraseña” y seleccionar el texto, mostrar una ventana emergente con el mensaje “No puedes copiar la contraseña debes repetirla!”; además de asegurarte que sobre la selección no se pueda hacer click derecho, ni se pueda copiar el contenido al portapapeles.</code></pre> </div></center><center> <img src="img6.png" style="width: 600px"></center>','La contraseña no debe tener símbolos, por lo tanto debes asegurarte que al intentar escribir un símbolo no se escriba en el campo e inmediatamente se muestre el mensaje de error correspondiente, el cual está definido en el HTML.</code></pre> </div></center><center> <img src="img7.png" style="width: 600px"></center>','Al quitar la selección del  campo “Repite la contraseña” verificar si el valor en los dos campos de contraseña coinciden, si no, mostrar el mensaje de error correspondiente y asignar el estilo de error a los dos campos de contraseña.</code></pre> </div></center><center> <img src="img8.png" style="width: 600px"></center>','Drag and Drop. Realizar las funciones necesarias, para que se puedan seleccionar las piezas del rompecabezas, mientras el click izquierdo del mouse esté presionado se puedan mover y modificar su posición.</code></pre> </div></center><center> <img src="img9.png" style="width: 600px"></center>','Validar que las piezas del rompecabezas encajan en el molde del corazón de la derecha, asignando un margen de error para que el usuario pueda resolver el rompecabezas (Si la pieza está dentro de un rango definido, asignarle la posición exacta en el molde para que encaje con las demás piezas). Al ubicar una pieza correctamente ésta debe cambiar su estilo y ya no debe permitir que se vuelva a arrastrar.</code></pre> </div></center><center> <img src="img10.png" style="width: 600px"></center>','Al hacer click en el botón enviar, se debe validar que no haya ningún error en el formulario y además que el rompecabezas se haya resuelto correctamente.</code></pre> </div></center><center> <img src="img11.png" style="width: 600px"></center>'], // el texto Instrucciones no irá si este array está vacio o no está
	type: "exercise-code",
	time: [45,'min.','minutos'],
	solution: 'solucion/nextUsolucionEventosjQuery.zip',  // si no está o está vacio no aparecerá
	base : 'solucion/nextUcodBaseEventosjQuery.zip' // si no está o está vacio no aparecerá
}

$.getScript( "../../includes/js/" + configuration.type + ".js" )
$('.backdrop').on('click', function() {
	$('#alert').toggleClass('active');
})
