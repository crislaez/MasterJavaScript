'use strict'

//pruebas con let y var

// prueba con var
var numero = 40; //valor 40
console.log(numero);

if(true){
	numero = 50;
	console.log(numero); //valor 50
}

console.log(numero); //valor 50

//prueba con let

var texto = "curso js crislaez";
console.log(texto); // valor "js"

if(true){
	let texto = "curso laravel 5 crislaez";
	console.log(texto); // valor "laraverl 5"
}
console.log(texto); //valor "js"