function submitLogin(event){
  event.preventDefault();
  var username = $('#user').val();
  var password = $('#password').val();
  var form_data = new FormData();
  form_data.append('username', username);
  form_data.append('password', password);
  $.ajax({
    url: './login.php',
    dataType: "text",
    cache: false,
    contentType: false,
    processData: false,
    data: form_data,
    type: 'post',
    success: function(data){
      if (data=="true") {
        window.location.href = 'index.html';
      }else {
        alert(data);
      }
    },
    error: function(){
      alert("error al enviar los datos");
    }
  });
}



$(function(){
  $("#login-form").submit(submitLogin);
})
