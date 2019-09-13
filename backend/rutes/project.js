'use strict'

var express = require('express');
var ProjectController = require('../controllers/project');

var router = express.Router();


//hacer un middleware para subir imagenes--------------------------
var multipart = require('connect-multiparty');  //crear la carpeta upload en el projecto------
var multipartMiddleware = multipart({uploadDir: './uploads'});
//creamos las 2 variables de arriva para que suba las fotos tambien en nuetro projecto---------------

router.get('/home',ProjectController.home);  //estos metodos 'home', estan creadas en la carpeta controller archivo 'project'
router.post('/test',ProjectController.test); //estos metodos 'home', estan creadas en la carpeta controller archivo 'project'
router.post('/save-project',ProjectController.saveProject); //estos metodos 'home', estan creadas en la carpeta controller archivo 'project'
router.get('/project/:id?',ProjectController.getProject); //estos metodos 'home', estan creadas en la carpeta controller archivo 'project'
router.get('/projects',ProjectController.getProjects); //estos metodos 'home', estan creadas en la carpeta controller archivo 'project'
router.put('/project/:id',ProjectController.updateProject);
router.delete('/project/:id',ProjectController.deleteProject);
router.post('/upload-image/:id',multipartMiddleware,ProjectController.uploadImage);//en postman damos en body a form data para escoger el tipo de archivo

module.exports = router;