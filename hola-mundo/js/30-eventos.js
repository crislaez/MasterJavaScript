"use strict"

// eventos del raton
window.addEventListener("load", function(){

			var boton = document.querySelector("#boton");
		// var boton = document.getElementById("boton");

		function cambiarcolor(){
			console.log("me has dado click");
			var bg=boton.style.background;

			if(bg == "green"){
				boton.style.background = "red";

			}else{
				boton.style.background = "green";
			}
			boton.style.padding = "10px";
			boton.style.border = "1px solid #ccc";
			//return true;
		}
		//-------------------------------
		function cambiarhover(){
			boton.style.background = "#ccc";
		}
		//-------------------------------------
		function cambiarhoversalir(){
			boton.style.background = "black";
		}

		// click
		boton.addEventListener("click", function(){
			cambiarcolor();
			// boton.style.border = "10px solid black";
			this.style.border = "10px solid black";
		});

		//mouse over
		boton.addEventListener("mouseover", function(){
			cambiarhover();
		});

		//mouseout
		boton.addEventListener("mouseout", function(){
			cambiarhoversalir();
		});

		//focus
		var input = document.querySelector("#campo_nombre")
		input.addEventListener("focus", function(){
			console.log("estas dentor del input");
		});


		//blur
		input.addEventListener("blur", function(){
			console.log("estas fuera");
		});

		//keydown
		input.addEventListener("keydown", function(event){
			console.log("pulsando una tecla",String.fromCharCode(event.keyCode));

		});

		//keypress
		input.addEventListener("keypress", function(event){
			console.log("teclapresionada",String.fromCharCode(event.keyCode));

		});

		//keyup
		input.addEventListener("keyup", function(event){
			console.log("tecla soltada",String.fromCharCode(event.keyCode));

		});

});
// var boton = document.querySelector("#boton");
// // var boton = document.getElementById("boton");

// function cambiarcolor(){
// 	console.log("me has dado click");
// 	var bg=boton.style.background;

// 	if(bg == "green"){
// 		boton.style.background = "red";

// 	}else{
// 		boton.style.background = "green";
// 	}
// 	boton.style.padding = "10px";
// 	boton.style.border = "1px solid #ccc";
// 	//return true;
// }
// //-------------------------------
// function cambiarhover(){
// 	boton.style.background = "#ccc";
// }
// //-------------------------------------
// function cambiarhoversalir(){
// 	boton.style.background = "black";
// }

// // click
// boton.addEventListener("click", function(){cambiarcolor()});

// //mouse over
// boton.addEventListener("mouseover", function(){cambiarhover()});

// //mouseout
// boton.addEventListener("mouseout", function(){cambiarhoversalir()});

// //focus
// var input = document.querySelector("#campo_nombre")
// input.addEventListener("focus", function(){
// 	console.log("estas dentor del input");
// });


// //blur
// input.addEventListener("blur", function(){
// 	console.log("estas fuera");
// });

// //keydown
// input.addEventListener("keydown", function(event){
// 	console.log("pulsando una tecla",String.fromCharCode(event.keyCode));

// });

// //keypress
// input.addEventListener("keypress", function(event){
// 	console.log("teclapresionada",String.fromCharCode(event.keyCode));

// });

// //keyup
// input.addEventListener("keyup", function(event){
// 	console.log("tecla soltada",String.fromCharCode(event.keyCode));

// });