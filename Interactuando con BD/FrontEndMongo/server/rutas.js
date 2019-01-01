const Router=require('express').Router()

Router.get('/all',function(req,res){
  Users.find().exec(function(err,docs){
    if(err){
      res.status(500)
      res.json(err)
    }
    res.json(docs)
  })
})
Router.get('/:id',function(req,res){

})
Router.post('/new',function(req,res){
  let user=new Users({
    userId:Math.floor(Math.random()*50),
    nombres:req.body.nombres,
    apellidos:req.body.apellidos,
    edad:req.body.edad,
    sexo:req.body.sexo,
    estado:'Activo',
  })
  user.save(function (error){
    if(error){
      res.status(500)
      res.json(err)
    }
    res.send('registro guardado')
  })
})
Router.post('/delete/:id',function(req,res){

})
Router.post('/inactive/:id',function(req,res){

})
Router.post('/active/:id',function(req,res){

})

module.exports=Router
