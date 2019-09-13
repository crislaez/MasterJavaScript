"use strict"

//DOM-dom document object model

//conseguir elementos con un ide concreto---------------------------
function cambiacolor(color){
	caja.style.background = color;
}
//var caja = document.getElementById("micaja");
//query selector

var caja = document.querySelector("#micaja");

caja.innerHTML = "¡texto en la caja dentro del js!"
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

// var colorcito = prompt("introduce el color dle padding");
// cambiacolor(colorcito);

//console.log(caja);
//conseguir elementos por su etiqueta--------------------------------------------------------

var todoslosdivs = document.getElementsByTagName("div");
// var contenidoentexto = todoslosdivs[2];
// //var contenidoentexto = todoslosdivs[2].innerHTML;
// contenidoentexto.innerHTML = "Otro texto para el segundo";
// console.log(contenidoentexto);

console.log(todoslosdivs);

var seccion = document.querySelector("#miseccion")
var hr = document.createElement("hr");


var valor; 
for(valor in todoslosdivs){
	
	if(typeof todoslosdivs[valor].textContent == "string"){
		var parrafo = document.createElement("p");
		var texto = document.createTextNode(todoslosdivs[valor].textContent);
		parrafo.append(texto);
		seccion.append(parrafo);
	}
	
}

seccion.append(hr);
//conseguir elementos por su clase css----------------------------------------------------

var divsrojos = document.getElementsByClassName("rojo");

var divamarillo = document.getElementsByClassName("amarillo");


for(var valor2 in divsrojos){
	if(divsrojos[valor2].className == "rojo"){
		divsrojos[valor2].style.background = "red";
	}
 	
}
divamarillo[0].style.background = "yellow";
// for(var i = 0; i<divsrojos.length; i++){
// 	divsrojos[i].style.background = "red";
// }
console.log(divsrojos)
//query selector------------------------------------------------------------------------------

var id = document.querySelector("#encabezado");
console.log(id);
var classerojo = document.querySelector("div.rojo");
console.log(classerojo);

var etiqueta = document.querySelector("div");
console.log(etiqueta);

