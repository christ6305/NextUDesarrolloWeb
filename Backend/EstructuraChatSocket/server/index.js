var bodyParser=require('body-parser'),
  http=require('http'),
  express=require('express'),
  chat= require('../Chat'),
  socketio=require('socket.io')

var port=port=process.env.PORT || 3000,
  app=express(),
  server=http.createServer(app),
  io=socketio(Server)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/chat',chat)
app.use(express.static('public'))

server.listen(port,function(){
  console.log('server is running on port: '+port)
})

io.on('Connection',function(socket){
  console.log('new user connection, socket: '+socket.id)

  socket.on('userJoin',function(user){
    //escuchar el evento userjoin, para agregar un usuario y emitir a los otros sockets
    socket.user=user
  })
  socket.broadcast.emit('userJoin',user)//emite el evento a todos menos a mi

  socket.on('message',function(message){
    //escuhar el evento message para emitirlo a otros sockets
    socket.broadcast.emit('message',message)//emite el evento a todos menos a mi
  })

  socket.on('disconnect',function(){
    //escuchar el evento de desconexion, para eliminar el usuario
    if(socket.hasOwnProperty('user')){
      deleteUser(socket.user, function(err,confirm){
        if(err) throw err
      })
    }
  })
})
