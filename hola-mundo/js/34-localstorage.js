"use strict"

//localstorage

//comprobar disponibilidad del localstorage------------------------
if(typeof(Storage) !== "undefined"){
	console.log("Localstorage disponible");

}else{
	console.log("incompatible con Localstorage");
}

//guardar datos en el localstorage------------------
localStorage.setItem("titulo", "Curso de symfony de CrisLaez");

//recuperdad elementos------------------------------
localStorage.getItem("titulo"); //cogerlo
console.log(localStorage.getItem("titulo")); //mostrarlo
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo"); //meterlo en un div del html

//guardar objetos json----------------------------------
var usuario = {
	nombre: "CrisLaez",
	email: "crislaez30@gmail.com",
	web: "crislaez.es"
}; 

localStorage.setItem("usuario", JSON.stringify(usuario));

//recuperar objetos json---------------------------------
var userjson = JSON.parse(localStorage.getItem("usuario"));//recogerlo
console.log(userjson); //mostrarlo
document.querySelector("#datos").append("Nombre:"+userjson.nombre+"Email:"+userjson.email+" Web:"+userjson.web);//mostrarlo en el html

//borrar datos del localstorage
localStorage.removeItem("usuario");

//vaciar todo el localstorage
localStorage.clear();