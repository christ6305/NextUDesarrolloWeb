$(function(){
  // $(".card").mouseover(function(){
  //   $(this).removeClass("blue");
  //   $(this).addClass("yellow");
  // });
  // $(".card").mouseout(function(){
  //   $(this).removeClass("yellow");
  //   $(this).addClass("blue");
  // });


  $("button").on("click",function(){
    $("#c1").find("span").replaceWith("<i class='material-icons medium'>thumb_up</i>");
    $(".card").find("p").replaceWith("<h5> nuevo texto </h5>");
    $("#c3").replaceWith($("#c8"));
    //$("<img src='image/s7.png'/>").replaceAll($(".card"));

  });

})
