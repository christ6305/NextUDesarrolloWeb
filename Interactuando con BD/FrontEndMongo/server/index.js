const http=require('http'),
      path=require('path'),
      express=require('express'),
      routing=require('./rutas.js'),
      bodyParser=require('body-parser'),
      mongoose=require('mongoose');
const PORT=8082
const app=express()
const Server=http.createServer(app)

app.use(bodyParser,json())
app.use(bodyParser,urlencoded({extended:true}))

app.use(express.static('client'))

app.use('/users',routing)

Server.listen(PORT,function(){
  console.log('SERVER IS LISTENING ON PORT: '+PORT);
})
