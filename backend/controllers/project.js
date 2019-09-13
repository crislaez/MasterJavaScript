'use strict'

var Project = require('../models/proyect');

var fs = require('fs'); //para borrar la extension si es erronea

var controller = {

 //estos metodos se ponen en el archivo project de la carpeta rutes------
	home: function(req, res){
		return res.status(200).send({
			message: 'Soy la home'
		});

	},
 //estos metodos se ponen en el archivo project de la carpeta rutes------
	test: function(req, res){
		return res.status(200).send({
			message: "Soy el metodo o accion test del controlador de projects"
		});

	},
 //estos metodos se ponen en el archivo project de la carpeta rutes------	
	saveProject: function(req, res){
		var project = new Project();

		var params = req.body;

		project.name = params.name;
		project.descripcion = params.descripcion;
		project.category = params.category;
		project.year = params.year;
		project.langs = params.langs;
		project.image = null;

		project.save((err, projectStored) =>{
			if(err) return res.status(500).send({message: 'Error al guardar'});
			if(!projectStored) return res.status(404).send({message: "No se a podido guardar"});

			return res.status(200).send({projecto: projectStored});
		});
	},
 //estos metodos se ponen en el archivo project de la carpeta rutes------	
	getProject: function(req, res){
		var projectId = req.params.id;

		if(projectId == null){
			return res.status(404).send({message: 'El proyecto no existe'});
		}

		Project.findById(projectId, (err, project) =>{

			if(err) return res.status(500).send({message: 'Error al devolver los datos'});
			if(!project) return res.status(404).send({message: 'El proyecto no existe'});

			return res.status(200).send({
				project
			})
		});
	},
//estos metodos se ponen en el archivo project de la carpeta rutes------ 
	//si dentro del find ponemos 'year: 2019' podremos buscar donde el año sea 2019
	//Project.find({}).sort('-year').exec((err, projects){} el sort devuelve ordenado por año por ejemplo
	getProjects: function(req, res){  
		Project.find({}).exec((err, projects) =>{
			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!projects) return res.status(404).send({message: 'No  hay projectos que mostrar'});

			return res.status(200).send({projects});
		});
	},
//estos metodos se ponen en el archivo project de la carpeta rutes------ 
//actualizar
	updateProject: function(req, res){
		var projectId = req.params.id;
		var update = req.body;

		Project.findByIdAndUpdate(projectId, update, {new:true}, (err, projectUpdate) => {
			if(err) return res.status(500).send({messagge: 'Error al actualizar'});

			if(!projectUpdate) return res.status(404).send({messagge: 'No existe el projecto'});

			return res.status(200).send({
				project: projectUpdate
			})
		});
	},
//estos metodos se ponen en el archivo project de la carpeta rutes------ 
//borrar
	deleteProject: function(req, res){
		var projectId = req.params.id;
		Project.findByIdAndRemove(projectId, (err, projectRemove) => {
			if(err) return res.status(500).send({messagge: 'No se ha podido borrar el projecto'});

			if(!projectRemove) return res.status(404).send({messagge: 'No se puede eliminar ese projecto'});

			return res.status(200).send({
				projest: projectRemove
			});
		});
	},
//estos metodos se ponen en el archivo project de la carpeta rutes------ 
//subir Archivos
 	uploadImage: function(req, res){
 		var projectId = req.params.id;
 		var fileName = 'Imagen no subida..';

 		if(req.files){
 			var filePath = req.files.image.path;
 			var fileSplit = filePath.split('\\');
 			var fileName = fileSplit[1];
 			var exSplit = fileName.split('\.');
 			var fileExt = exSplit[1];

 			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif' ){

	 			Project.findByIdAndUpdate(projectId, {image: fileName}, {new: true}, (err, projectUpdate) => {
	 				if(err) return res.status(500).send({messagge: 'La imagen no se a subido'});

	 				if(!projectUpdate) return res.status(404).send({messagge: 'El proyecto no existe'});

	 				return res.status(200).send({
	 				project: projectUpdate
	 					});
	 				});
 			}
 			else{
 				fs.unlink(filePath, (err) => {
 					return res.status(200).send({messagge: 'la extension no es valida'});
 				});
 			}

 		
 			
 		}
 	}			

};

module.exports = controller;  //para usar afuera usamos el require