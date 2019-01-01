var User=require('./models.js')

module.exports.insertarRegistro=function(callback){
  let christian=new User({nombre:'christian',edad:29,peso:90})
  christian.save((error)=>{
    if(error)callback(error)
    callback(null,'registro guardado')
  })
}

module.exports.eliminarRegistro=function(callback){
  User.remove({edad:29},(error)=>{
    if(error)callback(error)
    callback(null,'se elimino correctamente el registro')
  })
}

module.exports.consultarActualizarRegistro=function(callback){
  User.find({}).exec((error,result)=>{
      if(error)callback(error)
      console.log(result)
      User.update({nombre:'talhii'},{peso:55},(error,result)=>{
        if(error)callback(error)
        callback(null,result)
      })
  })
}
