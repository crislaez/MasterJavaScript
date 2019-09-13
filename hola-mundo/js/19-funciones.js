"use strict"

// funciones

// una funcion es una agrupacion reutilizable de un conjunto
// de instrucciones

//defino la funcion;
// do{
// 	var num1 = parseInt(prompt("INtroduce el primer numero",0));
// 	var num2 = parseInt(prompt("INtroduce el primer numero",0));
// }while(isNaN(num1) || isNaN(num2));

// do{
// 	var opcion = parseInt(prompt("Pulse, 1-Sumar, 2-Restar, 3-Multiplicar, 4-Dividir",0));
// }while(isNaN(opcion) || opcion<1 || opcion>4);

// calculadora(num1,num2,opcion);

// //funcion con parametros

// function calculadora(num1, num2, opcion){

// 	if(opcion==1){
// 		console.log("suma: "+(num1+num2));
// 	}
// 	else if(opcion==2){
// 		console.log("resta: "+(num1-num2));
// 	}
// 	else if(opcion==3){
// 		console.log("multiplicacion: "+(num1*num2));
// 	}
// 	else if(opcion==4){
// 		console.log("dividir: "+(num1/num2));
// 	}
	
// }
function porconsola(num1,num2){
	console.log("suma: "+(num1+num2));
	console.log("resta: "+(num1-num2));
	console.log("multiplicacion: "+(num1*num2));
	console.log("dividir: "+(num1/num2));
	console.log("**********************");
}

function porpantalla(num1,num2,){
	document.write("suma: "+(num1+num2)+"<br/>");
	document.write("resta: "+(num1-num2)+"<br/>");
	document.write("multiplicacion: "+(num1*num2)+"<br/>");
	document.write("dividir: "+(num1/num2)+"<br/>");
	document.write("**********************");
}

function calculadora(num1,num2, mostrar=false){

	if(mostrar==false){
		porconsola(num1,num2);
	}
	else{
		porpantalla(num1,num2);

		}
}

calculadora(2,3);
calculadora(3,2,true);