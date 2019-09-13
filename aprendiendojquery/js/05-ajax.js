$(document).ready(function(){


	//load--------------------------------------------------------------
	//var datos = $("#datos").load("https://reqres.in/");

	//Get-------------------------------------------------------
	$.get("https://reqres.in/api/users",{page: 3}, function(response){
		console.log(response);
		response.data.forEach((element, index) =>{
			$("#datos").append("<p>"+element.first_name+" "+element.last_name+"</p>");
		});

	});

	//Post-------------------------------------------------------
	// var usuario = {
	// 		nombre: "Crislaez",
	// 		web: "crisllaez.es"
	// };

	// $.post("https://reqres.in/api/users",usuario, function(response){
	// 	console.log(response);
	// });

	//metodo ajax--------------------------------------------------------


	//prueba--------------------------------------------
	var formulario = $("#formulario");
	formulario.submit(function(e){
		e.preventDefault();
			var usuario = {
				nombre: $('input[name="first_name"]').val(),
				web: $('input[name="web"]').val()
		};

		// console.log(usuario);
		// $.post($(this).attr("action"),usuario, function(response){
		// 	console.log(response);
		// 	$("#datos").append("<p>"+response.nombre+" "+response.web+"</p>");
		// });

		$.ajax({
			type: "POST",
			url: $(this).attr("action"),
			data: usuario,
			beforeSend: function(){
				console.log("enviado usuario...");

			},
			success: function(response){
				console.log(response);
			},
			error: function(){
				console.log("a ocurrido un error");
			},
			timeout: 2000
			});

		return false;
	});

});