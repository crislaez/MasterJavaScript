t"use strict"

var formpeliculas = document.querySelector("#formpeliculas");
var peli;
var listpeli = document.querySelector("#listpeli");

var formborrarpeliculas = document.querySelector("#formborrarpeliculas");
var borrarpelicula;

//eventlistener para añadir datos--------------------------------------
formpeliculas.addEventListener("submit",function(){
	peli = document.querySelector("#addpelicula").value;
	
	if(peli.length <=0){
		alert("campo vacio");
	}
	else{

	localStorage.setItem(peli,peli);
	}
});

//mostrarlos en el html-------------------------------------------------
for(var valor in localStorage){
	console.log(localStorage[valor]);

	if(typeof localStorage[valor] == "string"){
		var li =document.createElement("li");
		li.append(localStorage[valor]);
		listpeli.append(li);
	}
	
}

//eventlistener para borrar datos--------------------------------------
formborrarpeliculas.addEventListener("submit",function(){
	borrarpelicula = document.querySelector("#borrarpelicula").value;
	localStorage.removeItem(borrarpelicula,borrarpelicula);

});