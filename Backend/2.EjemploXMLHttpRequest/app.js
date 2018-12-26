(function($){
  var inputUser=$('#username')
  var url='https://api.github.com/users/'
  inputUser.on('keypress',function(e){
    if(e.which===13){
      var username=$(this).val().trim().toLowerCase()
      if(username!==''){
        var XHR=new XMLHttpRequest()
        var URLUser=url+username
        XHR.open('GET',URLUser)
        XHR.onreadystatechange=function(){
          if(XHR.readyState===4){
            var data =JSON.parse(XHR.responseText);
            if(data.message && data.message=='Not Found'){
              alert('el nombre de usuario no existe en github')
            }else{
              $('img').attr('src',data.avatar_url)
              $('.name').text(data.name)
              $('.username').text(data.login)
              $('.email').text(data.email)
              $('.company').text(data.company)
              $('.location').text(data.location)
              $('.followers').text(data.followers)
            }
          }
        }
        XHR.send(null)
      }else{
        alert('debe ingresar un nombre de usuario')
      }
    }
  })

})(jQuery)
