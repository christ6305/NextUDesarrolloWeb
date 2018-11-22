$(function(){

  $("#accordion").accordion();

  $("#fecha").datepicker({
    changeMonth: true
  });

  $(".emergente").dialog({
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      "Delete all items": function() {
        $( this ).dialog( "close" );
      },
      Cancel: function() {
        $( this ).dialog( "close" );
      }
    }
  })

})
