(function($){

  function sigFotos(){
    $('#fila1').hide()
    $('.next-btn').hide()
    $('#fila2').show()
    $('.prev-btn').show()
  }

  function prevFotos(){
    $('#fila1').show()
    $('.next-btn').show()
    $('#fila2').hide()
    $('.prev-btn').hide()
  }


  $(function(){

    $('.button-collapse').sideNav();

    $('.next-btn').click(function(e){
      e.preventDefault()
      sigFotos()
    })
    $('.prev-btn').click(function(e){
      e.preventDefault()
      prevFotos()
    })


  }); // end of document ready
})(jQuery); // end of jQuery name space
