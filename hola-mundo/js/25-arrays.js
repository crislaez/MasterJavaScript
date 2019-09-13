"use strict"

//arrays , arreglos , matrices

var nombre = "Cristian Pelaez";

var nombres = ["Nataly","Cristian","Ivan", 43,true];

//var lenguajes = new Array("PHP","JS","Go","Java" );

// do{
// 	alert("introduce un numero menor a "+nombres.length)
// 	var elemento = parseInt(prompt("¿ que elemento del array quieres?",0));
// }while(elemento >= nombres.length);

// document.write(nombres[elemento]);

// document.write("<h1>Lengujes de programacion del 2019</h1>");
// document.write("<ul>")
// for(var i=0; i<nombres.length; i++) {
// 	document.write("<li>"+nombres[i]+"</li>");
// }
// document.write("</ul>")

// document.write("<h1>Lengujes de programacion del 2019</h1>");
// document.write("<ul>")

// nombres.forEach((elemento)=>{
// 	document.write("<li>"+elemento+"</li>");
// });
// document.write("</ul>")

// //o tambien
// nombres.forEach((elemento, indice)=>{
// 	document.write("<li>"+indice+" "+elemento+"</li>");
// });

// //o tambien
// nombres.forEach((elemento, indice, arr)=>{
// 	console.log(arr);
// 	document.write("<li>"+indice+" "+elemento+"</li>");
// });

//-------------------------------
// document.write("<ul>")
// for(let nombres2 in nombres){
// 	document.write("<li>"+nombres[nombres2]+"</li>");
// }
// document.write("</ul>")
//-------------------------------
// var busqueda = nombres.findIndex(lenguaje =>	 lenguaje == "Cristian");

// console.log(busqueda);
//-----------------------------------------

// var precios = [12,13,14,15,16,17];

// var busqueda = precios.some(precio => precio == 14);
// console.log(busqueda);
do{
var indice = parseInt(prompt("introduce el indice para saber que hay"));
}while(indice>nombres.length);
for (var i=0; i<nombres.length; i++){

	console.log(nombres[indice]);
}