var MongoClient=require('mongodb').MongoClient
var url='mongodb://localhost/nodeDriver'
var operaciones=require('./CRUD.js')

MongoClient.connect(url,function(err,db){
  if(err)console.log(err)
  console.log('conexion establecida con la base de datos');
  // operaciones.insertarRegistro(db,(error,result)=>{
  //   if(error)console.log('error insertando los registros '+error)
  // })
  // operaciones.eliminarRegistro(db,(error,result)=>{
  //   if(error)console.log('error eliminando los registros '+error)
  // })
  operaciones.consultarActualizarRegistro(db,(error,result)=>{
    if(error)console.log('error consultado y actualizando los registros '+error)
  })
})
