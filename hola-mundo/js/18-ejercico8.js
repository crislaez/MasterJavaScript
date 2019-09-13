"use strict"

var opcion=0;
var num1=0;
var num2=0;
var resultado=0;

do{
	opcion=parseInt(prompt("introduce 1 para sumar, 2 restar, 3 multiplicar, 4 dividir",0));
}while(opcion<1 || opcion>4 || isNaN(opcion));

do{
	num1=parseInt(prompt("introduce el primer numero",0));
	num2=parseInt(prompt("introduce el segundo numero",0));

}while(num1<0 || num2<0 || isNaN(num1) ||isNaN(num2) );

switch(opcion){

	case 1:
		resultado=num1+num2;
		document.write("<p>"+"la suma es:"+resultado+"</p>");
		break;

	case 2:
		resultado=num1-num2;
		document.write("<p>"+"la resta es:"+resultado+"</p>");
		break;

	case 3:
		resultado=num1*num2;
		document.write("<p>"+"la multiplicacion es:"+resultado+"</p>");
		break;

	case 4:
		resultado=num1/num2;
		document.write("<p>"+"la division es:"+resultado+"</p>");
		break;

	default:
	 	break;	
}