var http = require('http')
var Routing = require('requestRouting.js')

var PORT = 8080

var Server = http.createServer(Routing)
Server.listen(PORT, function() {
  console.log('Server is listeng on port: ' + PORT)
})
