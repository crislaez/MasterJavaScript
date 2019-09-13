$(document).ready(function(){

	//mousover y mousout-------------------------------------
	var caja = $("#caja");

	// caja.mouseover(function(){
	// 	$(this).css("background","red");
	// });

	// caja.mouseout(function(){
	// 	$(this).css("background","green");
	// });


	

	//hover----------------------------------
	function cambiarojo(){
		$(this).css("background","red");
	};

	function cambiaverde(){
		$(this).css("background","green");
	};
	caja.hover(cambiarojo,cambiaverde);

	//click, doble click-----------------
	caja.click(function(){
		$(this).css("background","blue")
				.css("color","white");
	});

	caja.dblclick(function(){
		$(this).css("background","pink")
				.css("color","yellow");
	});

	//focus y blur----------------------------
	var nombre = $("#nombre");
	var datos = $("#datos");

	nombre.focus(function(){
		$(this).css("border","2px solid green");
	});
	nombre.blur(function(){
		$(this).css("border","2px solid red");
		datos.text($(this).val()).show();
	});

	//mousedown mouseup------------------------
	datos.mousedown(function(){
		$(this).css("border-color","gray");
	});

	datos.mouseup(function(){
		$(this).css("border-color","black");
	});

	//mousemove-----------------------------
	$(document).mousemove(function(){
		// console.log(event.clientX);
		// console.log(event.clientY);
		$("body").css("cursor","none");
		var sigueme = $("#sigueme");
		sigueme.css("left",event.clientX)
					.css("top",event.clientY);

	});

});