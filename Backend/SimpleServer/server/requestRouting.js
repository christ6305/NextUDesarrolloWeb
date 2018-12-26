var dispatcher = require('httpdispatcher')

// Routing usando httpdispatcher
function handleRequest(req, res) {

  // Get Users
  dispatcher.onGet('/users', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'} )
    res.end('Estas en el modulo de usuarios')
  })

  // Get Admin
  dispatcher.onGet('/admin', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'} )
    res.end('Estas en el modulo de Administradores')
  })

  // Get Dashboard
  dispatcher.onGet('/dashboard', function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain'} )
    res.end('Estas en el dashboard')
  })

  // Error
  dispatcher.onError(function(req, res) {
    res.writeHead(400)
    res.end('No se encontro el recurso solicitado')
  })

  dispatcher.dispatch(req, res)
}

/* Routing sin usar otros modulos
function handleRequest(req, res) {
    var url = req.url
    switch (url) {
      case '/users':
        res.end('Estas en el modulo de usuarios')
        break;
      case '/admin':
        res.end('Estas en el modulo de administradores.')
        break;
      case '/dashboard':
        res.end('Estas en el dashboard')
        break;
      default:
        res.end('Recurso no encontrado')
        break;
    }
}
*/
module.exports = handleRequest
