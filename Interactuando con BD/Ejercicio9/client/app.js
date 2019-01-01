
obtenerDataInicial()

//Escuchar el boton para eliminar
$('body').on('click', '#Eliminar', function(e) {
    e.preventDefault()
    let id = $(this).data('id')
    let url = 'users/delete/'+id
    $.get(url, function(confirm) {
        alert(confirm)
        obtenerDataInicial('filtro')
    })
})

// Escuchar el boton para guardar
$('.Guardar').on('click', function(e) {
    e.preventDefault()
    if ($('#Nombres').val() !== "") {
      let url = '/users/new'
      let user = {
          nombres: $('#Nombres').val(),
          apellidos: $('#Apellidos').val(),
          edad: $('#Edad').val(),
          sexo: $('input:checked')[0].value
      }
      $.post(url, user, function(confirm) {
          alert(confirm)
          pintarDatos([user])
      })
    } else {
      alert("Complete los datos")
    }
})

//Escuchar el boton para filtrar:
$('#Buscar').on('click', function(e) {
    e.preventDefault()
    let nombre = $('#NombreBusqueda').val()
    if (nombre != "") {
        $.ajax({
          url: '/users/?nombre='+nombre+'',
          method: 'GET',
          data: {},
          success: function(data) {
            pintarDatos([data], "filtro")
          }
        })
    } else {
        alert("Ingrese un nombre para buscar")
    }

})

function obtenerDataInicial() {
    $.ajax({
      url: '/users/all',
      method: 'GET',
      data: {},
      success: function(data) {
        pintarDatos(data, 'filtro')
      }
    })
}

function pintarDatos(datos, tipo){
    let table = $('table tbody')
    if (tipo === "filtro") {
        table.html('')
    }
    let template = "<tr>"+
                      "<td>:nombres:</td>"+
                      "<td>:apellidos:</td>"+
                      "<td>:edad:</td>"+
                      "<td>:sexo:</td>"+
                      "<td>:estado:</td>"+
                      "<td><button type='button' id='Eliminar' data-id=':userId:' name='Eliminar'>Eliminar</button></td>"+
                  "</tr>"
    $.each(datos, function(i, user) {
        let estado = user.estado == "Activo" ?
                                "<div id='Activo'<span>Activo</span></div>":
                                "<div id='Inactivo'<span>Inactivo</span></div>"
        let row = template.replace(':userId:', user.userId)
                          .replace(':nombres:', user.nombres)
                          .replace(':apellidos:', user.apellidos)
                          .replace(':edad:', user.edad)
                          .replace(':sexo:', user.sexo)
                          .replace(':estado:', estado)
        table.append(row)
    })
}
