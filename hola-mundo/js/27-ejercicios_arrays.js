"use strict"
//o podemos hacer var array = new Array(6);

/*
var array = [];
for(var i=1; i<=6; i++){

	
		array[i] = parseInt(prompt("introduce el numero "+i+" para guardarlos en el array, hasta 6"));
	
	

}
*/
var array = [];

//parte 1, 2------------------crear array 6 numeros e ir añadiendilos
for(var i=1; i<=6; i++){

	do{
		var numero = parseInt(prompt("introduce el numero "+i+" para guardarlos en el array, hasta 6"));
	}while(isNaN(numero) || numero<0);
	array.push(numero);

}
mostrar(array, "tal cual");

//parte 3------------------ordenarlo

array.sort(function(a, b){return a-b});
mostrar(array, "ordenado");

//parte 4------------------al reves

array.reverse();
mostrar(array, "al reves");

//parte 5------------------cuantos elementos tiene
console.log(array.length);

//parte 6------------------buscar
var buscar = parseInt(prompt("introduce el nuero que deseas buscar del array"));

var indice = array.indexOf(buscar);

if(indice !=-1){
	document.write("<h1> encontrado</h1>");
}
else{
	document.write("<h1> No encontrado</h1>");
}

console.log(indice);
//funcion generica
function mostrar(array, texto){

	document.write("<h1>"+"Elementos del array "+texto+" </h1>");
	array.forEach((variable, index) => {document.write("<strong>"+variable+" </strong><br/>")});
	console.log(array);

};