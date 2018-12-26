$(document).ready(function() {
  $('select').material_select();
  $('select').on('change', selectEvent);

 });


function selectEvent(event){
  if ($(event.target).val()=='registro de notas') {
    window.location.href = 'registro.php'
  }
}
