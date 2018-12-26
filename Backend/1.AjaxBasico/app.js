var htmlNode=document.getElementById('datos')

$.ajax({
  url:'http://api.tvmaze.com/shows',
  type:'GET',
  data:{},
  success:function(){
    data.forEach(function(val,i){
      htmlNode.innerHtml=htmlNode.innerHtml+'<li>'+val.name+'</li>'
    })
  }
})
