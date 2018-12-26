var inputUser= $('#username')

inputUser.on('keypress',function(e){
  if(e.which===13){
    ajaxAsync();
  }
})

function ajaxAsync(){
  var url='https://api.github.com/users/'
  var username=inputUser.val().trim().toLowerCase()
  if(username!==''){
    var URLUser=url+username
    $.ajax({
      url:URLUser,
      type:'GET',
      async:true,
      success:function(response){
        var data=response
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
    })
  }
}
