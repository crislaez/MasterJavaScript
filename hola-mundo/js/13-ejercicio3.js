"use strict"

var num1 = 0;
var num2 = 0;

do{
	 num1 = parseInt(prompt("introduce el primer numero",0));
	 num2 = parseInt(prompt("introduce el segundo numero",0));
}while(isNaN(num1) || isNaN(num2))

document.write("<h1> de "+num1+" a "+num2+" estan estos numeros;</h1>");

for(var i = num1 ; i <= num2 ; i++){
	
	document.write(i+"<br>");
}