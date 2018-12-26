var bodyParser=require('body-parser'),
  http=require('http'),
  express=require('express'),

  chat= require('../Chat')

var port=port=process.env.PORT || 3000,
  app=express(),
  server=http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/chat',chat)
app.use(express.static('public'))

server.listen(port,function(){
  console.log('server is running on port: '+port)
})
