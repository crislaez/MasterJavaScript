//podemos poner el simbolo $ o si no poner jQuery

// jQuery(document).ready(function(){
// 	console.log("estamos listos");
// });

$(document).ready(function(){

	//selectior de ID---------------------------------------------------
	var rojo = $("#rojo").css("background","red")
							.css("color","white"); //se pued eseguir concatenando

	$("#amarillo").css("background","yellow")  //no aria falta crear variable
							.css("color","green");

	$("#verde").css("background","green")  
							.css("color","white");						


	//selector de CLASE-------------------------------------------------
	// var miclase = $(".zebra")
	// //console.log(miclase[0]);
	// miclase.css("border","5px dashed black"); //aqui por ejemlo usamos .css en la variable

	var miclase = $(".zebra").css("padding","5px");

	$(".sinborde").click(function(){
		console.log("has dado click");
		$(this).addClass("zebra");
	});

	//selectores de etiqueta---------------------------------------------
	var parrafos = $("p").css("cursor","pointer");
	parrafos.click(function(){
		
		var that = $(this);
		if(!that.hasClass("grande")){
			that.addClass("grande");
		}else{
			that.removeClass("grande");
		}
	});

	//selectores de atributo-------------------------------------------
	$('[title="Google"]').css("background","#ccc");
	$('[title="Facebook"]').css("background","blue");

	//Otros--------------------------------------------------------------
	//$("p, a").addClass("margen-superior");

	// var busqueda = $("#caja").find(".resaltado");
	// console.log(busqueda);

	var busqueda = $("#elemento2").parent().parent().find('.resaltado');
	console.log(busqueda);

});