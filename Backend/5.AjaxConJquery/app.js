for (var i=1;i<=80;i++){
    $.ajax({
      url:'http://pokeapi.co/api/v2/pokemon-form/'+i,
      type:'GET',
      data:{},
      dataType:'json',
      success:function(data){
        $('.pokemons').append('<li><img src="'+response.sprites.front_default+'" ></img></li>')
      }
    })
}
