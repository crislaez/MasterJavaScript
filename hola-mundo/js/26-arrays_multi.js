"use strict"

var categorias = ["Accion", "Terror", "Comedia"];

var peliculas = ["La verdad duele", "La vida es bella", "Gran torino"];

var cine = [categorias, peliculas];

// console.log(cine);

//para ir solo a categorias
// console.log(cine[0][1]); // el array posicion cero "categorias" y el indice 1 "terror"
// console.log(cine[1][2]); //el array en la posicion 1 "peliculas" y el indice 2 "Gran torino"

//--------------------------------------------------

// do{
// var elemento = prompt("introduce tu pelicula, introduce terminar para finalizar");

// peliculas.push(elemento);
// }while(elemento != "terminar");

// peliculas.pop();


// console.log(peliculas);

//-----------------------------------------------------
// var indice = peliculas.indexOf("Gran torino");
// if(indice > -1){ 						//-1 es poqur si no existe el elemento
// 	peliculas.splice(indice, 1}			// en este caso borra el indice que le hemos pasado, y ponemos despus de la ,1 para que borre solo 1
// 										//si ponemos 2 o mas borraria apartir de ese indice 2 o mas hacia atras 

// console.log(peliculas);
//-----------------------------------------------------------
// var peliculas_string = peliculas.join();
// console.log(peliculas_string);

//-----------------------------------------------------------
// var cadena = "texto1, texto2, texto3"; 
// var cadenaarray = cadena.split(", ");
// console.log(cadenaarray);

//-----------------------------------------------------------
// peliculas.sort();
// console.log(peliculas);
//-----------------------------------------------------------
peliculas.reverse();
console.log(peliculas);