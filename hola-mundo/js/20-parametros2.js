"use strict"


// parametros rest y spread

function listadofrutas(fruta1,fruta2, ...rest_de_frutas){
	console.log("fruta 1: "+ fruta1);
	console.log("fruta 2: "+ fruta2);
	console.log(rest_de_frutas);
}

listadofrutas("Naranja", "Manzana", "Sandia", "Pera", "Melon", "Coco")

var frutas = ["Naranja", "Manzana"];

listadofrutas(...frutas, "Sandia", "Pera", "Melon", "Coco")