$(function(){
  getInitData()
})



function getInitData(){
  $.get('server/welcome.php', function(data){
    if (data.msg == 'OK') {
      $('div.primera').find('h1').append(data.nombre);
      $.each(data.infoViajes, function(key, value){
        $('#table-body').append(`
          <tr>
            <td>${value['ciudad_origen']}</td>
            <td>${value['ciudad_destino']}</td>
            <td>${value['placa']}</td>
            <td>${value['fabricante']} ${value['referencia']}</td>
            <td>${value['fecha_salida']}</td>
            <td>${value['fecha_llegada']}</td>
            <td>${value['hora_salida']}</td>
            <td>${value['hora_llegada']}</td>
          </tr>
          `)
      })
    }else {
      alert(data.msg);
      window.location.href = "index.html";
    }

  }, 'json')
  .fail(function() {
    alert( "Se presentó un error" );
  })

}
