"use strict"

// funciones anonimas
// es una funcion que no tiene nombre


function sumame(num1, num2,sumaymestra, sumapordos){
	
	var suma=num1+num2;
	sumaymestra(suma);
	sumapordos(suma);
	return suma;
}

//sumame(5, 7, function(dato){console.log("la suma es: "+dato);}, function(dato){console.log("la suma por dos es: ",(dato*2));} );

sumame(5, 7, function(dato){
	console.log("la suma es: "+dato);
},
function(dato){
	console.log("la suma por dos es: ",(dato*2));
}
);
//--------------------------------------------------
//funcion de flecha
function sumame(num1, num2,sumaymestra, sumapordos){
	
	var suma=num1+num2;
	sumaymestra(suma);
	sumapordos(suma);
	return suma;
}

//sumame(5, 7, function(dato){console.log("la suma es: "+dato);}, function(dato){console.log("la suma por dos es: ",(dato*2));} );

sumame(5, 7, (dato) =>{
	console.log("la suma es: "+dato);
},
(dato) =>{
	console.log("la suma por dos es: ",(dato*2));
}
);
// function sumame(num1, num2){
	
// 	var suma=num1+num2;
// 	sumaymestra(suma);
// 	sumapordos(suma);
// 	return suma;
// }

// //sumame(5, 7, function(dato){console.log("la suma es: "+dato);}, function(dato){console.log("la suma por dos es: ",(dato*2));} );

// function sumaymestra(suma){
// 	console.log("la suma es: "+suma)
// }
// function sumapordos(suma){
// 	console.log("la suma por 2 es: "+(suma*2))

// }
// sumame(2,3)
