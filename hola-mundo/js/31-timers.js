"use strict"

window.addEventListener("load", function(){

//timers
	var tiempo = setInterval(function(){
		console.log("set interval ejecutado");

		//document.querySelector("h1").style.fontSize = "50px";
		var encabezado = document.querySelector("h1");

		if(encabezado.style.fontSize == "50px"){

			encabezado.style.fontSize = "30px";

		}else{

			encabezado.style.fontSize = "50px";
		}
		

	}, 3000);

	//
	//-----------------------------------------
	function intervalo(){
		var tiempo = setInterval(function(){
		console.log("set interval ejecutado");

		//document.querySelector("h1").style.fontSize = "50px";
		var encabezado = document.querySelector("h1");

		if(encabezado.style.fontSize == "50px"){

			encabezado.style.fontSize = "30px";

		}else{

			encabezado.style.fontSize = "50px";
		}
		

	}, 500);
		return tiempo;
	}

	//-----------------------------------------
	// var tiempo = setTimeout(function(){
	// 	console.log("set interval ejecutado");

	// 	//document.querySelector("h1").style.fontSize = "50px";
	// 	var encabezado = document.querySelector("h1");

	// 	if(encabezado.style.fontSize == "50px"){

	// 		encabezado.style.fontSize = "30px";

	// 	}else{

	// 		encabezado.style.fontSize = "50px";
	// 	}
		

	// }, 500);

	//parar la variable tiempo-------------------------------------------------
	var boton = document.querySelector("#stop");

	boton.addEventListener("click",function(){
		alert("has parado el intervalo en bucle");
		clearInterval(tiempo);
	});

	//conmenzar la variable tiempo--------------------------------------------
	var boton2 = document.querySelector("#start");

	boton2.addEventListener("click",function(){
		alert("has iniciado el intervalo en bucle");
		intervalo();
	});





});