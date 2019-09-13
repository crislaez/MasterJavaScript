"use strict"

var num=0;
var mult=0;
do{
	num = parseInt(prompt("ingresa un numero",0));
}while(isNaN(num));

document.write("<h1>"+"la tabla de multiplicar del numero: "+num+"</h1>")

for(var i=0; i<=10; i++){
	mult=num*i;
	document.write("<p>"+num+" X "+i+" = "+mult+"</p>");
}