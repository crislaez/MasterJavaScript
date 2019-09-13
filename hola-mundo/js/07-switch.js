"use strict"

// switch
var edad = 70;
var imprime = "";

switch(edad){
	case 18:
		imprime = "acabas de cumplir la mayoria de edad";
		break;
	case 25:
		imprime = "ya eres un adulto";
		break;
	case 40:
		imprime = "crisis de los cuarenta";
		break;	
	case 70:
		imprime = "eres ya un anciano";
		break;	
	default:
		imprime = "tu edad es neutra";
		break;
}	
console.log(imprime);