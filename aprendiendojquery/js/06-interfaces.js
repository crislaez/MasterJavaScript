$(document).ready(function(){
	//mover elemento por la pagina---------------------------------------------------
	//importamos solo el .js de jquery ui
	$(".elemento").draggable();

	//redimensionar--------------------------------------------------------------------
	//hayq eu poner 3 links en el html, uno del css, otro para el structure y otro para el theme
	$(".elemento").resizable();

	//seleccionar elementos-----------------------------------------------------------
	//$(".listaseleccionable").selectable();

	//ordenar elementos---------------------------------------------------------------
	$(".listaseleccionable").sortable({
		update: function(event, ui){
			console.log("ha cambiado la lista");
		}
	});

	//drop--------------------------------------------------------------------------------
	$("#elementomovido").draggable();
	$("#area").droppable({
		drop: function(){
			console.log("has soltado algo dentro del area");
		}
	});

	//efectos--------------------------------------
	$("#mostrar").click(function(){
		// $(".cajaefectos").effect("explode");
		// $(".cajaefectos").toggle("explode");
		// $(".cajaefectos").toggle("blind");
		// $(".cajaefectos").toggle("slide");
		// $(".cajaefectos").toggle("drop");
		// $(".cajaefectos").toggle("fold");
		// $(".cajaefectos").toggle("puff");
		// $(".cajaefectos").toggle("scale");
		// $(".cajaefectos").toggle("shake","slow");
		 $(".cajaefectos").toggle("shake", 4000);

	});

	// tooltip-----------------------------
	$(document).tooltip();

	// $('#cajauno').tooltipster();

	//dialog---------------------------------
	// $("#popup").dialog();

	$("#lanzarpopup").click(function(){
		$("#popup").dialog();
	});

	//datepicker--------------------------------
	$("#calendario").datepicker();

	//tabs---------------------------------------
	$("#pestanas").tabs();

});