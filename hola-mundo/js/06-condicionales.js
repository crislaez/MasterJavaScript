"use strict"

// condicional IF
// si a es igual a b entonces haz algo

// var edad1 = 10;
// var edad2 = 12;

// operadores relacioneles:  >   <   >=   <=   ==   !=;

//operadores logicos && , || , !
var edad = 12;
var nombre = "David Suearez";

if(edad>=18){

	console.log(nombre+" Es mayor de edad porque tiene "+edad);

	if(edad <= 33){
		console.log("todavia eres millenial");
	}
	else if(edad >= 70){
		console.log("eres anciano");
	}else{
		console.log("ya no eres milenial")
	}

}
else{
	console.log(nombre+" Es menor de edad porque tiene "+edad);
}

var year = 2018;
//negacion
if(year != 2016){
	console.log("el año no es 2016 realmente es: "+year);
}
//and
if(year >= 2000 && year <= 2020 && year != 2018){
	console.log("estamos en la era actual");
}else{
	console.log("estamos en la era post moderna");
}
//or
if(year == 2008 || (year >= 2018  && year == 2028) ){
    console.log("el año acaba en ocho");
}else{
	console.log("año no registrado");
}