const mongoose = require('mongoose')
	const Schema = mongoose.Schema

	let UserSchema = new Schema({
		userId:{ type: Number, require: true, unique:true },
		nombres:{ type: String, require: true },
		apellidos:{ type: String, require: true },
		edad:{ type: Number, require: true },
		sexo:{ type: String, require: true, enum: ['M', 'S']},
		estado:{ type: String, require: true, enum: ['Activo', 'Inactivo'] }
	})
	let UserModel = mongoose.model('Usuario', UserSchema)
	module.exports = UserSchema

  mongoose.connect('mongodb://localhost/c7')
