"use strict"


//operadores
var numero1 = 7;
var numero2 = 12;
var operacion = numero1%numero2;

alert("Resultado de la operacion es: "+operacion);

//tipo de datos
var numero_entero = 44;
var cadena_texto = "hola que tal";
var verdadero_o_falso = true;
var numero_falso = "33";

console.log(Number(numero_falso)+7);
console.log(parseInt(numero_falso)+7);
console.log(parseFloat(numero_falso)+7);
console.log(String(numero_entero)+4);

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);