"use strict"

var num1 = parseInt(prompt("introduce Primer numero"));
var num2 = parseInt(prompt("introduce Segundo numero"));
document.write("<h1>"+"los numeros entre "+num1+" y "+num2+" son "+"</h1>");

for(var i = num1 ; i <= num2 ; i++){

	if( i%2!=0 ){
		document.write(i+"<br>");
	}

}