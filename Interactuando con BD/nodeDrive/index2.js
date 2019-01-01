var MongoClient=require('mongodb').MongoClient
var url='mongodb://localhost/nodeDriver'
var mongoose=require('mongoose')
var operaciones=require('./CRUDMongoose.js')

mongoose.connect(url)
// operaciones.insertarRegistro((error,result)=>{
//   if(error)console.log(error)
//   console.log(result)
// })
// operaciones.eliminarRegistro((error,result)=>{
//   if(error)console.log(error)
//   console.log(result)
// })

operaciones.consultarActualizarRegistro((error,result)=>{
  if(error)console.log(error)
  console.log(result)
})
