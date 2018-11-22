$(function(){

  $(".panel-imagen")
    .on("click", function(){
      $(".panel-imagen p").addClass("texto-1", 2000)
      $(".panel-imagen").toggleClass("panel-2", 2000)
    })
    .on("mouseover", function(){
      $(".texto-1").switchClass("texto-1","texto-2", 1000)
      $(".texto-2").switchClass("texto-2","texto-1", 1000)
    })
    $("#fold").on("click", function(){
      $(".panel-imagen").hide("fold",1000)
    })
    $("#bounce").on("click", function(){
      $(".panel-imagen").show("bounce",1000)
    })
    $("#explode").on("click", function(){
      $(".panel-imagen").toggle("explode",1000)
    })
    $("#shake").on("click", function(){
      $(".panel-imagen").effect("shake",1000)
    })

  $(document).on("keypress", function(event){
    if (event.which==32) {
      event.preventDefault();
      $("body, container").animate({
        backgroundColor: "#606060"
      })
    }
  })

})
