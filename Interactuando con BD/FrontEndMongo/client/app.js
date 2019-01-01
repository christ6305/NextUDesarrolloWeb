
obtenerDataInicial()
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

function obtenerDataInicial() {
    $.ajax({
      url: '/users/all',
      method: 'GET',
      data: {},
      success: function(data) {
        pintarDatos(data)
      }
    })
}

function pintarDatos(datos){
    let table = $('table tbody')
    let template = "<tr>"+
                      "<td>:nombres:</td>"+
                      "<td>:apellidos:</td>"+
                      "<td>:edad:</td>"+
                      "<td>:sexo:</td>"+
                      "<td>:estado:</td>"+
                      "<td><button type='button' id='Eliminar' name='Eliminar'>Eliminar</button></td>"+
                  "</tr>"
    $.each(datos, function(i, user) {
        let estado = user.estado == "Activo" ? "<div id='Activo'<span>Activo</span></div>": "<div id='Inactivo'<span>Inactivo</span></div>"
        let row = template.replace(':nombres:', user.nombres)
                          .replace(':apellidos:', user.apellidos)
                          .replace(':edad:', user.edad)
                          .replace(':sexo:', user.sexo)
                          .replace(':estado:', estado)
        table.append(row)
    })
}
