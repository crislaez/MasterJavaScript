"use strict"

// es el browser object model
function getBom(){
	console.log(screen.width);
	console.log(screen.height);
	// console.log(window.innerWidth);
	// console.log(window.innerHeight);
	console.log(window.location.href);
}

function redirect(url){
	window.location.href = url;
}
function abrirventana(url){
	window.open(url,"","width=400,height=300");
}

getBom();