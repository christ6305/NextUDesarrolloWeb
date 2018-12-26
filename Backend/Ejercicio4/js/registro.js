function estiloNotaDefinitiva(){
  $.each($('.nota-definitiva'), function(index, value){
    var nota = parseFloat(value.innerHTML)
    if (nota >= 3.0) {
      $(value).css('color','#109f38')
    }else {
      $(value).css('color','#e61c1c')
    }
  })
}


$(document).ready(function() {
  estiloNotaDefinitiva();
 });
