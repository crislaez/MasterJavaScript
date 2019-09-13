'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
	name : String,
	descripcion: String,
	category: String,
	year: Number,
	langs: String,
	image: String

});
module.exports = mongoose.model('Proyect',ProjectSchema);
//proyects ----> guarda los documentos en la coleccion de labase de datos