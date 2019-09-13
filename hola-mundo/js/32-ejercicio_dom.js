"use strict"

var datonombre;
var datoapellido;
var datoedad;
var div = document.querySelector(".dashed");
div.style.display = "none";
var submit = document.querySelector("#submit");
var botonaccion = document.querySelector("#botonaccion");
botonaccion.disabled = true;
var formulario = document.querySelector("#formulario");
//console.log(formulario);



 function validar(){
 	var uno = false;
 	var dos = false;
 	var tres = false;
 		console.log("evento subit capturado");
	datonombre = document.querySelector("#nombre").value;
	datoapellido = document.querySelector("#apellido").value;
	datoedad = parseInt(document.querySelector("#edad").value);

	if(datonombre.trim() == null || datonombre.trim().length == 0){
		alert("rellene el nombre");
		document.querySelector("#error1").innerHTML = "error";
		error1.innerHTML = "error";
		uno = false;

	}
	else{
		document.querySelector("#error1").style.display = "none";
		uno = true;
	}
	if(datoapellido.trim() == null || datoapellido.trim().length == 0){
		alert("rellene los apellidos");
		document.querySelector("#error2").innerHTML = "error";
		
		dos = false;

	}else{
		document.querySelector("#error2").style.display = "none";
		dos = true;
	}
	if(datoedad == null || datoedad <= 0 || isNaN(datoedad)){
		alert("rellene la edad");
		document.querySelector("#error3").innerHTML = "error";
		
		tres = false;

	}else{
		document.querySelector("#error3").style.display = "none";
		tres = true;
	}
	if(uno == true && dos == true && tres == true){
		botonaccion.disabled = false;
	}
	console.log(datonombre);
	console.log(datoapellido);
	console.log(datoedad);

 }
function mostrar(){
	div.style.display = "block";
	// var parrafo1 = document.createElement("p");
	// var parrafo2 = document.createElement("p");
	// var parrafo3 = document.createElement("p");

	// var texto1 = document.createTextNode(datonombre);
	// var texto2 = document.createTextNode(datoapellido);
	// var texto3 = document.createTextNode(datoedad);

	// parrafo1.appendChild(texto1);
	// parrafo2.appendChild(texto2);
	// parrafo3.appendChild(texto3);

	// div.appendChild(parrafo1);
	// div.appendChild(parrafo2);
	// div.appendChild(parrafo3);
	//-------------------------------------
	// var parrafo1 = document.createElement("p");
	// parrafo1.append(datonombre);
	// parrafo1.append(datoapellido);
	// parrafo1.append(datoedad);
	// div.appendChild(parrafo1);
	//----------------------------------------------
	// var datosusuario = [datonombre,datoapellido,datoedad];
	// var valor;
	// for(valor in datosusuario){

	// 	var parrafo1 = document.createElement("p");
	// 	parrafo1.append(datosusuario[valor]);
	// 	div.appendChild(parrafo1);
	// };
	var pnombre=document.querySelector("#p_nombre span");
	var papellido=document.querySelector("#p_apellido span");
	var pedad=document.querySelector("#p_edad span");
	pnombre.innerHTML = datonombre;
	papellido.innerHTML = datoapellido;
	pedad.innerHTML = datoedad;
	
};

formulario.addEventListener("submit",function(){
validar();
	
})

botonaccion.addEventListener("click", function(){
	mostrar();
	botonaccion.disabled=true;
	submit.disabled=true;

});
