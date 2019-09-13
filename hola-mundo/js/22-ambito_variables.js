"use strict"

var texto = "hola mundo soy una variable global";
var numero = 12;

function holamundo(texto){
	var hola_mundo = "texto dentro de funcion";
	console.log(texto);
	console.log(typeof numero.toString());
	console.log(hola_mundo);
}

holamundo(texto);

