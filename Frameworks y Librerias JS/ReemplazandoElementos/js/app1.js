

$(function(){
  $("button").on("click",function(){
    $("#A").replaceAll($("#B"));
    $("#C").replaceAll($("#F"));
    $("#E").replaceWith($("#E"));
  });
});
