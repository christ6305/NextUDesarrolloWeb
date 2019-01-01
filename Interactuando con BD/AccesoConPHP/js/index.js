$(function(){

  $('#login-form').submit(function(event){
    var username = $('#login-form').find('#username').val();
    var passw = $('#login-form').find('#passw').val();
    event.preventDefault();

    $.ajax({
      url: 'server/login.php',
      dataType:'json',
      cache:false,
      data: {username: username, passw: passw},
      type: 'POST',
      success: function(php_response){
        if(php_response.conexion=='OK'){
          window.location.href='welcome.html';
        }else{
          alert(php_response.conexion);
        }
      },
      error: function(){
        alert("error in ajax form submission");
      }
    });



  });



})
