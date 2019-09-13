"use strict"

do{

var num1 = parseInt(prompt("¿introduce el primer numero?", 0));
var num2 = parseInt(prompt("¿introduce el segundo numero?", 0));

}while(num1<=0 || num2<=0 || isNaN(num1) || isNaN(num2));

if(num1 > num2){
	console.log("el primer numero es mayor");
	console.log("numero uno: "+num1);
	console.log("numero dos: "+num2);
}
else if (num2 > num1) {
	console.log("el segundo numero es mayor");
	console.log("numero uno: "+num1);
	console.log("numero dos: "+num2);
}
else if(num2 = num1){
	console.log("los dos numeros son iguales");
	console.log("numero uno: "+num1);
	console.log("numero dos: "+num2);
}
else{
	alert("introduce numeros correctos");
}