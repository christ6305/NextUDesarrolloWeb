self.addEventListener('message', function(e) {
  var datos = JSON.parse(e.data)
  console.log(datos);
  if (datos.hasOwnProperty('numeroDoc')) {
    self.postMessage(true)
  } else {
    self.postMessage(false)
  }
})
