var User = require('./models.js')

module.exports.insertarRegistro = function(callback) {
    let Mateo = new User({ nombre: "Mateo", edad: 28, peso: 90 })

    Mateo.save((error) => {
        if (error) callback(error)
        callback(null, "Registro guardado")
    })
}

module.exports.eliminarRegistro = function(callback) {
    User.remove({ edad: 35 }, (error) => {
        if (error) callback(error)
        callback(null, "Se elimino el registro correctamente");
    })
}

module.exports.consultarYActualizar = function(callback) {
    User.find({}).exec((error, result) => {
        if (error) callback(error)
        console.log(result)
        User.update({nombre: "Mateo"}, {peso: 40}, (error, result) => {
            if (error) callback(error)
            callback(null, result)
        })
    })
}

module.exports.ordenarConsulta = function(callback) {
    User.find({}).sort({edad: -1}).exec((error, result) => {
        if (error) callback(error)
        callback(null, result)
    })
}
