"use strict"



var fecha = new Date();
//var year = fecha.getYear(); // el año recortado
var year = fecha.getFullYear();//año completo
var mes = fecha.getMonth()+1;
var dia = fecha.getDate();
var hora = fecha.getHours();
var minutos = fecha.getMinutes();
var segundos = fecha.getSeconds();

var textohora = `
	El año es: ${year}
	El mes es: ${mes}
	El dia es: ${dia}
	La hora es: ${hora}
	Los minutos son: ${minutos}
	Los segundos son: ${segundos} 
`;

console.log(textohora);
console.log(Math.random()*100);
console.log(Math.ceil(Math.random()*100))
