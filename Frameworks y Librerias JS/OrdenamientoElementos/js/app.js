$(function(){



  $("#perAbajo").on("click",function(){
    var persona = $(".personas li.collection-item");
    var nombres= new Array(5);
    for (var i = 0; i < persona.length; i++) {
      nombres[i]=$(persona[i]).text();
    }
    nombres.sort();
    for (var i = 0; i < persona.length; i++) {
      $(persona[i]).text(nombres[i]);
    }
  });

  $("#perArriba").on("click",function(){
    var persona = $(".personas li.collection-item");
    var nombres= new Array(5);
    for (var i = 0; i < persona.length; i++) {
      nombres[i]=$(persona[i]).text();
    }
    nombres.sort();
    nombres.reverse();
    for (var i = 0; i < persona.length; i++) {
      $(persona[i]).text(nombres[i]);
    }
  });

})
