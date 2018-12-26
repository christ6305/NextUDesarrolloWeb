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
      alert(data);
    },
    error: function(){
      alert("error in ajax form submission");
    }
  });
}



$(function(){
  $("#login-form").submit(submitLogin);
})
