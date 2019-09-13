"use strict"


// var cont=0;

// do{
// 	do{

// 	var num1 = parseInt(prompt("primer numero",0));
// 	var num2 = parseInt(prompt("segundo numero",0));

// 	}while(isNaN(num1) || isNaN(num2) );

// 	var suma = num1+num2;
// 	var media = (num1+num2)/2;
// 	alert("la suma es: "+suma);
// 	alert("la media es: "+media);

// }while(num1>=0 || num2>=0);

// var cont=0;
 var suma=0;
 var media=0;
var num1=0;

do{
 	do{

 	 num1 = parseInt(prompt("mete un numero",0));
 	
	
 	}while( isNaN(num1) );

   if(num1 < 0){
 	
	 alert("la suma es: "+suma);
	 alert("la media es: "+media);
 	}	
 
 	 suma = suma+num1;
	 
}while( num1 >= 0 );