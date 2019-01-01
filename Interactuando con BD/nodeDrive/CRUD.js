module.exports.insertarRegistro=function(db,callback){
  let colleccion=db.collection('users')

  colleccion.insertMany([
    {nombre:'christian',edad:29,peso:100},
    {nombre:'talhii',edad:24,peso:60}
  ],(error,result)=>{
    console.log('resultado de insert '+result.toString());
  })
}

module.exports.eliminarRegistro=function(db,callback){
  let colleccion=db.collection('users')

  try {
    colleccion.deleteOne({edad:29})
    console.log('se elimino el registro correctamente');
  } catch (e) {
    console.log('se genero un eror: '+e)
  }
}

module.exports.consultarActualizarRegistro=function(db,callback){
  let colleccion=db.collection('users')

  colleccion.find().toArray((error,documents)=>{
    if(error)console.log(error);
    console.log(documents);
  })

  try {
    colleccion.updateOne({nombre:'talhii'},{$set:{peso:50}})
    console.log('se ha actualizado correctamente')
  } catch (e) {
    console.log('error actualizando el registro')
  }

  colleccion.find().toArray((error,documents)=>{
    if(error)console.log(error);
    console.log(documents);
  })
}
