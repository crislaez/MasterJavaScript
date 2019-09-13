$(document).ready(function(){

	var caja = $("#caja");
	$("#mostrar").hide();

	$("#mostrar").click(function(){
		$(this).hide();
		$("#ocultar").show();
		caja.fadeTo("slow",1);
		//$("#caja").fadeIn("slow");
		//$("#caja").show("fast");
		//$("#caja").show("normal");
		//$("#caja").slideDown("slow",1);
	});

	$("#ocultar").click(function(){
		$(this).hide();
		$("#mostrar").show();
		//caja.fadeTo("slow",0);
		//$("#caja").slideUp("slow",0);
		caja.fadeTo("slow",function(){
			console.log("cartel ocultado");
		});
		
		
	});

	// $("#todoenuno").click(function(){
	// 	//$("#caja").toggle("fast");
	// 	//$("#caja").fadeToggle("fast");
	// 	$("#caja").slideToggle("fast");
	// });
	$("#animame").click(function(){
		caja.animate({//ojeto JSON
					marginLeft: "500px",
					fontSize: "40px",
					height: "110px"	
						}, "slow")
			.animate({
				borderRadius: "900px",
				marginTop: "80px"

			},"slow")
			.animate({
				borderRadius: "0px",
				marginLeft: "0px"

			},"slow")
			.animate({
				borderRadius: "0px",
				marginTop: "15px",
				fontSize: "19px",
				height: "50px"

			},"slow");

	});

});