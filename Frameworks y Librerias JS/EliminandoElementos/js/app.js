$(function(){
  $(".card").mouseover(function(){
    $(this).removeClass("blue");
    $(this).addClass("yellow");
  });
  $(".card").mouseout(function(){
    $(this).removeClass("yellow");
    $(this).addClass("blue");
  });

})
